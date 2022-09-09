import { OrderItemParams } from './OrderItemParams'
import { OrderPaymentParams } from './OrderPaymentParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { OrderShippingParams } from './OrderShippingParams'
import { RequestPayload } from '../../../Base/RequestPayload'
import { AddressParams } from '../../../Shared/AddressParams'
import { HttpMethodEnum } from 'dc-node-backend'
import { OrderMarketplaceParams } from './OrderMarketplaceParams'

export interface OrderCreateRequestParams {
    customer_id: number
    external_id?: string
    address: AddressParams
    payment: OrderPaymentParams
    shipping: OrderShippingParams
    items: OrderItemParams[]
    type?: string
    note?: string | null
    status?: string
    fulfillment_status?: string
    marketplace?: OrderMarketplaceParams
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
