import { ApplicationConfig } from '@loopback/core';
import { FootballeristaAIService } from './application';

export { FootballeristaAIService };

export async function main(options: ApplicationConfig = {}) {
  const app = new FootballeristaAIService(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;

  console.log('----------------------------------------');
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);
  console.log('----------------------------------------');

  return app;
}
