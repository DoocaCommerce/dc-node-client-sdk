import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { CustomerCreateRequestParams } from './CustomerCreateRequest'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export interface CustomersUpdateRequestParams extends Partial<CustomerCreateRequestParams> {
    id: number
}

export class CustomerUpdateRequest extends RequestPayload {
    constructor(private params: CustomersUpdateRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.CUSTOMERS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
