import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface BrandQueryParams extends PaginationQueryParams {}

export class BrandListRequest extends Request<BrandQueryParams> {
    constructor() {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.BRANDS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
