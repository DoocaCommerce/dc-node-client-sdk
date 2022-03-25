import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export interface CustomersGetOneRequestParams {
    id: number
}

export class CustomersGetOneRequest extends Request {
    constructor(private params: CustomersGetOneRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.CUSTOMERS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}