import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'

export interface OrderListRequestParams extends PaginationQueryParams {
    
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
