import {
  Client,
  createRestAppClient,
  givenHttpServerConfig,
} from '@loopback/testlab';
import dotenv from 'dotenv';
import { FootballeristaAIService } from '../..';

const getFirebaseConfig = (appName?: string) => {
  return {
    name: 'FirebaseAuth',
    connector: '@footballerista-llc/loopback-connector-firebase-auth',
    serviceAccount: '',
    databaseURL: '',
    appName,
  };
};

export async function setupApplication(
  applicationName: string,
): Promise<AppWithClient> {
  dotenv.config();
  const restConfig = givenHttpServerConfig({
    // Customize the server configuration here.
    // Empty values (undefined, '') will be ignored by the helper.
    //
    // host: process.env.HOST,
    // port: +process.env.PORT,
  });

  const app = new FootballeristaAIService({
    rest: restConfig,
    databaseSeeding: false,
    name: applicationName,
  });

  app
    .bind('datasources.config.FirebaseAuth')
    .toDynamicValue(() => getFirebaseConfig(applicationName));

  await app.boot();
  await app.start();
  const client = createRestAppClient(app);

  return { app, client };
}

export interface AppWithClient {
  app: FootballeristaAIService;
  client: Client;
}
