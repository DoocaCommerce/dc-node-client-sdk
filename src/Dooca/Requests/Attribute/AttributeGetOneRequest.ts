import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../Shared/BaseUriEnum'

export interface AttributeGetOneRequestParams {
    id: number
}

export class AttributeGetOneRequest extends Request {
    constructor(private params: AttributeGetOneRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.ATTRIBUTES}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
