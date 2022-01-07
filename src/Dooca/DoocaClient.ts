import {
    Client,
    ClientConfig,
    ClientFactory,
    ClientResponse
} from 'dc-node-backend/lib/Http/Client'
import { Request, RequestPayload } from '../Base'
import { DoocaClientConfig } from './DoocaClientConfig'

export class DoocaClient {
    private client: Client = ClientFactory.getInstance()

    private constructor(private config: DoocaClientConfig) {}

    static create(config: DoocaClientConfig) {
        return new DoocaClient(config)
    }

    send(req: Request): Promise<ClientResponse> {
        return this.client.request(this.getRequestConfig(req))
    }

    private getRequestConfig(req: Request): ClientConfig {
        const { baseUrl, token } = this.config

        const config: ClientConfig = {
            url: `${baseUrl}${req.getUrl()}`,
            method: req.getMethod(),
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        if (req instanceof RequestPayload) {
            config.payload = req.getPayload()
        }

        return config
    }
}
