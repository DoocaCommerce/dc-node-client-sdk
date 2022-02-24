import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface AttributeListQueryParams extends PaginationQueryParams {}

export class AttributeListRequest extends Request<AttributeListQueryParams> {
    constructor() {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.ATTRIBUTES
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
