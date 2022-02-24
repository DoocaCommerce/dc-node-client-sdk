import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base'
import { PaginationQueryParams } from '../../../Base/Query/PaginationQueryParams'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface ColorListQueryParams extends PaginationQueryParams {}

export class ColorListRequest extends Request<ColorListQueryParams> {
    constructor() {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.COLORS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
