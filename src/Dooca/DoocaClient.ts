import { Client, ClientConfig, ClientFactory, ClientResponse } from 'dc-node-backend'
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

        let url = baseUrl + req.getUrl()

        if (req.hasQuery()) {
            url += req.getQueryString()
        }

        const config: ClientConfig = {
            url,
            method: req.getMethod(),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        if (req.hasPayload()) {
            config.payload = (req as RequestPayload).getPayload()
        }

        return config
    }
}
