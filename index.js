if (process.env.APM_ENABLE) {
  const tracer = require('dd-trace').init(
    {
      hostname: process.env.DD_AGENT_HOST,
      port: process.env.DD_TRACE_AGENT_PORT,
      service: 'fbl-user-service',
      env: process.env.K8S_POD_NAMESPACE
    }
  );
}
require('dotenv').config();

const application = require('./dist');

module.exports = application;

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT || 3000),
      host: process.env.HOST,
      // The `gracePeriodForClose` provides a graceful close for http/https
      // servers with keep-alive clients. The default value is `Infinity`
      // (don't force-close). If you want to immediately destroy all sockets
      // upon stop, set its value to `0`.
      // See https://www.npmjs.com/package/stoppable
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
      requestBodyParser: { limit: '100MB' },
    },
    databaseSeeding: false,
  };
  application.main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
