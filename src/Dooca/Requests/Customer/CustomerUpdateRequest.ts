import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { CustomerCreateRequestParams } from './CustomerCreateRequest'
import { HttpMethodEnum } from 'dc-node-backend'

export interface CustomerUpdateRequestParams extends Partial<CustomerCreateRequestParams> {
    id: number
}

export class CustomerUpdateRequest extends RequestPayload {
    constructor(private params: CustomerUpdateRequestParams) {
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
