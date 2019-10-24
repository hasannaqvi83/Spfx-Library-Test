import { Client } from '@microsoft/microsoft-graph-client';
import { MSGraphClient } from "@microsoft/sp-http";

export class GraphAPI {

    private _client: Client | MSGraphClient;
    constructor(client: Client | MSGraphClient) {
        this._client = client;
    }
}