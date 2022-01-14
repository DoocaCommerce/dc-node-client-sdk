import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../Shared/BaseUriEnum'

export interface BrandGetOneRequestParams {
    id: number
}

export class BrandGetOneRequest extends Request {
    constructor(private params: BrandGetOneRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.BRANDS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
