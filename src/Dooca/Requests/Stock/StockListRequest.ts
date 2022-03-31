import { HttpMethodEnum } from 'dc-node-backend'
import { Request } from '../../../Base'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface StockListQueryParams extends PaginationQueryParams {}

export class StockListRequest extends Request<StockListQueryParams> {
    constructor() {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.STOCKS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
