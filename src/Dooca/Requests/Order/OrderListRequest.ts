import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { StatusEnum, PaymentStatusEnum, PaymentMethodEnum, FulfillmentStatusEnum } from './Enums'

export interface OrderListRequestParams extends PaginationQueryParams {
    status?: StatusEnum
    payment_status?: PaymentStatusEnum
    fulfillment_status?: FulfillmentStatusEnum
    marketplace?: string
    current_status?: string
    payment_method?: PaymentMethodEnum
    customer_id?: number
    created_at?: string
    updated_at?: string
    expires_at_max?: string
    expires_at?: string
}

export class OrderListRequest extends Request {
    constructor(private params: OrderListRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.ORDERS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
