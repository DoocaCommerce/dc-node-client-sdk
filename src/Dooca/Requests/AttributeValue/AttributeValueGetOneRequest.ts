import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface AttributeValueGetOneRequestParams {
    id: number
}

export class AttributeValueGetOneRequest extends Request {
    constructor(private params: AttributeValueGetOneRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.ATTRIBUTE_VALUES}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
