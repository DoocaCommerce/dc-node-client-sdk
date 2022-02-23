import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface BrandDeleteRequestParams {
    id: number
}

export class BrandDeleteRequest extends Request {
    constructor(private params: BrandDeleteRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.BRANDS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.DELETE
    }
}
