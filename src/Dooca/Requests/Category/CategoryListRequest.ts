import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface CategoryListQueryParams extends PaginationQueryParams {}

export class CategoryListRequest extends Request<CategoryListQueryParams> {
    constructor() {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.CATEGORIES
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
