import {
  AuthenticateFn,
  AuthenticationBindings,
  AUTHENTICATION_STRATEGY_NOT_FOUND,
  USER_PROFILE_NOT_FOUND,
} from '@loopback/authentication';
import { inject } from '@loopback/context';
import {
  FindRoute,
  HttpErrors,
  InvokeMethod,
  InvokeMiddleware,
  ParseParams,
  Reject,
  RequestContext,
  RestBindings,
  Send,
  SequenceHandler,
} from '@loopback/rest';

const SequenceActions = RestBindings.SequenceActions;

export class MySequence implements SequenceHandler {
  /**
   * Optional invoker for registered middleware in a chain.
   * To be injected via SequenceActions.INVOKE_MIDDLEWARE.
   */
  @inject(SequenceActions.INVOKE_MIDDLEWARE, { optional: true })
  protected invokeMiddleware: InvokeMiddleware = () => false;

  constructor(
    @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(SequenceActions.SEND) public send: Send,
    @inject(SequenceActions.REJECT) public reject: Reject,
    @inject(AuthenticationBindings.AUTH_ACTION)
    protected authenticateRequest: AuthenticateFn,
  ) {}

  async handle(context: RequestContext) {
    try {
      const { request, response } = context;
      const finished = await this.invokeMiddleware(context);
      if (finished) return;
      const route = this.findRoute(request);

      //call authentication action
      await this.authenticateRequest(request);

      // Authentication successful, proceed to invoke controller
      const args = await this.parseParams(request, route);
      const result = await this.invoke(route, args);
      this.send(response, result);
    } catch (err) {
      switch (err.code) {
        case AUTHENTICATION_STRATEGY_NOT_FOUND:
        case USER_PROFILE_NOT_FOUND:
          Object.assign(err, { statusCode: 401 /* Unauthorized */ });
          break;
        case 'INVALID_INCLUSION_FILTER':
          throw new HttpErrors.BadRequest(err.message);
        case '23505':
          throw new HttpErrors.Conflict(err.detail);
      }
      this.reject(context, err);
    }
  }
}
