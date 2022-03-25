import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { AddressParams } from '../../../Shared/AddressParams'
import { RequestPayload } from '../../../Base/RequestPayload'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export interface CustomersCreateRequestParams {
    first_name: string
    last_name: string
    cgc: string
    email: string
    birthday: string
    entity: string
    password?: string
    address?: AddressParams
}

export class CustomersCreateRequest extends RequestPayload {
    constructor(private params: CustomersCreateRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.CUSTOMERS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
