import { OrderItemParams } from './OrderItemParams'
import { OrderPaymentParams } from './OrderPaymentParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { OrderShippingParams } from './OrderShippingParams'
import { RequestPayload } from '../../../Base/RequestPayload'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export interface OrderCreateRequestParams {
    customer_id: number
    note?: string
    address: {
        receiver: string
        zipcode: string
        street: string
        number: string
        detail: string
        district: string
        city: string
        state: string
    }
    payment: OrderPaymentParams
    shipping: OrderShippingParams
    items: OrderItemParams[]
}

export class OrderCreateRequest extends RequestPayload {
    constructor(private params: OrderCreateRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.ORDERS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
