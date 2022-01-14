import { Client, ClientConfig, ClientResponse } from 'dc-node-backend/lib/Http/Client'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

const codes = {
    [HttpMethodEnum.GET]: 200,
    [HttpMethodEnum.POST]: 201,
    [HttpMethodEnum.PUT]: 200,
    [HttpMethodEnum.PATCH]: 200,
    [HttpMethodEnum.DELETE]: 204
}

export class ClientTest implements Client {
    async request(config: ClientConfig): Promise<ClientResponse> {
        return {
            getData: () => ({}),
            getStatusCode: () => codes[config.method]
        }
    }
}
