import { HttpMethodEnum } from 'dc-node-backend'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface ShopListByAppQueryParams extends PaginationQueryParams {}

export class ShopListByAppRequest extends Request<ShopListByAppQueryParams> {
    constructor(protected appSlug: string) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.SHOPS + '/app/' + this.appSlug
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
