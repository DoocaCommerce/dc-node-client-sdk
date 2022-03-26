import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { OrderCreateRequestParams } from './OrderCreateRequest'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export interface OrderUpdateRequestParams extends Partial<OrderCreateRequestParams> {
    id: number
}

export class OrderUpdateRequest extends RequestPayload {
    constructor(private params: OrderUpdateRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.ORDERS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
