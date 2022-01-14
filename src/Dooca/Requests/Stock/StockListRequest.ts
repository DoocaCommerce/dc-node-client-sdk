import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base'
import { BaseUriEnum } from '../Shared/BaseUriEnum'

export class StockListRequest extends Request {
    constructor() {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.STOCKS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
