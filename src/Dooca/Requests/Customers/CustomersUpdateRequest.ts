import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { CustomersCreateRequestParams } from './CustomersCreateRequest'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export interface CustomersUpdateRequestParams extends Partial<CustomersCreateRequestParams> {
  id: number
}

export class CustomersUpdateRequest extends RequestPayload {
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
