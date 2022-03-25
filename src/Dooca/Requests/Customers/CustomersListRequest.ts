import { Request } from '../../../Base'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'

export interface CustomersListRequestParams extends PaginationQueryParams {}

export class CustomersListRequest extends Request<CustomersListRequestParams> {
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
