import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

import { HttpMethodEnum } from 'dc-node-backend'

import { BaseUrlOrderEnum } from './shared/BaseUrlOrderEnum'
import { RequestPayload } from '../../../Base'

export interface OrderStatusUpdateRequestParams {
    order_id: string
    status: string
}

export class OrderStatusUpdateRequest extends RequestPayload {
    constructor(private params: OrderStatusUpdateRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.ORDERS}/${this.params.order_id}/${BaseUrlOrderEnum.PAYMENT}/${this.params.status}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        throw new Error('Method not implemented.')
    }
}
