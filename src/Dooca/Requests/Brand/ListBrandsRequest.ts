import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'

export class ListBrandRequest implements Request {
    constructor() {}

    getUrl(): string {
        return `/brands`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
