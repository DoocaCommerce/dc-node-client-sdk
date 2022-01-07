import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'

export class BrandListRequest implements Request {
    constructor() {}

    getUrl(): string {
        return `/brands`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
