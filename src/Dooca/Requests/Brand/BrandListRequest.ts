import { HttpMethodEnum } from 'dc-node-backend'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface BrandListQueryParams extends PaginationQueryParams {}

export class BrandListRequest extends Request<BrandListQueryParams> {
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
