import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export interface CustomerGetOneRequestParams {
    id: number
}

export class CustomerGetOneRequest extends Request {
    constructor(private params: CustomerGetOneRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.CUSTOMERS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
