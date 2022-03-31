import { Request } from '../../../Base'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'

export interface CustomerListQueryParams extends PaginationQueryParams {}

export class CustomerListRequest extends Request<CustomerListQueryParams> {
    constructor() {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.CUSTOMERS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
