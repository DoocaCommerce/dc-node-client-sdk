import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface AttributeValueQueryParams extends PaginationQueryParams {}
export class AttributeValueListRequest extends Request<AttributeValueQueryParams> {
    constructor() {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.ATTRIBUTE_VALUES
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
