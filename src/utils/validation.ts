import { uuidPattern } from '@footballerista-llc/fbl-type-schema';
import { HttpErrors, RestHttpErrors } from '@loopback/rest';

export const validateUuidPattern = (name: string, value?: string) => {
  if (!value) {
    throw RestHttpErrors.missingRequired(name);
  }
  if (!value.match(uuidPattern)) {
    throw RestHttpErrors.invalidData(value, name);
  }
};

export const checkUsernameRestricted = (username: string) => {
  const validUsernameRegex = new RegExp(
    /^(^(?!\w*?f\w*?[o0]\w*?[o0]\w*?t\w*?b\w*?a\w*?[l1]\w*?[l1]\w*?e\w*?r\w*?i\w*?s\w*?t\w*?a\w*?)\w+)$/,
    'g',
  );
  return !validUsernameRegex.test(username);
};

export const validateStringLength = (
  string: string,
  minLength: number,
  maxLength: number,
  path: string,
) => {
  const message =
    'The request body is invalid. See error object `details` property for more info.';
  const code = 'VALIDATION_FAILED';
  if (string.length < minLength) {
    const error = new HttpErrors.UnprocessableEntity();
    const errorDetails = {
      path,
      code: 'minLength',
      message: `should NOT be shorter than ${minLength} characters`,
      info: {
        limit: minLength,
      },
    };
    Object.assign(error, {
      message,
      code,
      details: errorDetails,
    });
    throw error;
  }
  if (string.length > maxLength) {
    const error = new HttpErrors.UnprocessableEntity();
    const errorDetails = {
      path,
      code: 'maxLength',
      message: `should NOT be longer than ${maxLength} characters`,
      info: {
        limit: maxLength,
      },
    };
    Object.assign(error, {
      message,
      code,
      details: errorDetails,
    });
    throw error;
  }
};
