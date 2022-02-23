import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface StockQueryParams extends PaginationQueryParams {}

export class StockListRequest extends Request<StockQueryParams> {
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
