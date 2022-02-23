import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface AttributeDeleteRequestParams {
    id: number
}

export class AttributeDeleteRequest extends Request {
    constructor(private params: AttributeDeleteRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.ATTRIBUTES}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.DELETE
    }
}
