import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface AttributeQueryParams extends PaginationQueryParams {}

export class AttributeListRequest extends Request<AttributeQueryParams> {
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
