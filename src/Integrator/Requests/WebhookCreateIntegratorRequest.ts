import { HttpMethodEnum } from 'dc-node-backend'
import { RequestPayload } from '../../Base'
import { BaseUriIntegratorEnum } from '../Shared/BaseUriIntegratorEnum'

export interface WebhookCreateIntegratorRequestParams {
    event: string
    url_callback: string
}

export class WebhookCreateIntegratorRequest extends RequestPayload {
    constructor(private params: WebhookCreateIntegratorRequestParams) {
        super()
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
    getUrl(): string {
        return `/${BaseUriIntegratorEnum.INTEGRATOR}/${BaseUriIntegratorEnum.CREATE}/${BaseUriIntegratorEnum.WEBHOOK}`
    }
    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }
}
