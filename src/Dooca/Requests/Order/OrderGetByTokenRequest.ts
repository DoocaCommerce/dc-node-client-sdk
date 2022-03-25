import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export interface OrderGetByTokenRequestParams {
    token: string
}

export class OrderGetByTokenRequest extends Request {
    constructor(private params: OrderGetByTokenRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.ORDERS}/token/${this.params.token}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
