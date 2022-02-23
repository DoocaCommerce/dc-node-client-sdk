import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface VariationGetOneRequestParams {
    id: number
}

export class VariationGetOneRequest extends Request {
    constructor(private params: VariationGetOneRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.VARIATIONS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
