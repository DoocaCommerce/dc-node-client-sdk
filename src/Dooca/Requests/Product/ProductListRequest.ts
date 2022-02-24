import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface ProductListQueryParams extends PaginationQueryParams {}

export class ProductListRequest extends Request<ProductListQueryParams> {
    constructor() {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.PRODUCTS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
