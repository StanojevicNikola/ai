import { Client } from '@loopback/testlab';
import { FootballeristaAIService } from '../..';
export declare function setupApplication(applicationName: string): Promise<AppWithClient>;
export interface AppWithClient {
    app: FootballeristaAIService;
    client: Client;
}
