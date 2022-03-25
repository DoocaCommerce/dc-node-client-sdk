import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export interface CustomersDeleteRequestParams {
    id: number
}

export class CustomersDeleteRequest extends Request {
    constructor(private params: CustomersDeleteRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.CUSTOMERS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.DELETE
    }
}
