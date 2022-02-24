import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface VariationListQueryParams extends PaginationQueryParams {}

export class VariationListRequest extends Request<VariationListQueryParams> {
    constructor() {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.VARIATIONS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
