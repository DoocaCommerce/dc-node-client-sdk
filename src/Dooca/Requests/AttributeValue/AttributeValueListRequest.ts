import { HttpMethodEnum } from 'dc-node-backend'
import { Request } from '../../../Base'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface AttributeValueListQueryParams extends PaginationQueryParams {}

export class AttributeValueListRequest extends Request<AttributeValueListQueryParams> {
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
