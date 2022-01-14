import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../Shared/BaseUriEnum'

export interface AttributeValueDeleteRequestParams {
    id: number
}

export class AttributeValueDeleteRequest extends Request {
    constructor(private params: AttributeValueDeleteRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.ATTRIBUTE_VALUES}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.DELETE
    }
}
