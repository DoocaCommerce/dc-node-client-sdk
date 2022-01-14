import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base'
import { BaseUriEnum } from '../Shared/BaseUriEnum'

export class VariationListRequest extends Request {
    constructor() {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.VARIATIONS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
