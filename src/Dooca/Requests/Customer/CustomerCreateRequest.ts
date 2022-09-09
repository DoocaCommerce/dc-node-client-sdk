import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { AddressParams } from '../../../Shared/AddressParams'
import { RequestPayload } from '../../../Base/RequestPayload'
import { HttpMethodEnum } from 'dc-node-backend'

export interface CustomerCreateRequestParams {
    first_name: string
    last_name: string
    cgc: string
    email: string
    birthday: string
    entity: string
    phone?: string
    password?: string
    address?: AddressParams
}

export class CustomerCreateRequest extends RequestPayload {
    constructor(private params: CustomerCreateRequestParams) {
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
