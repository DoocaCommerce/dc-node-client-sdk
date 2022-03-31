import { HttpMethodEnum } from 'dc-node-backend'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface VariationDeleteRequestParams {
    id: number
}

export class VariationDeleteRequest extends Request {
    constructor(private params: VariationDeleteRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.VARIATIONS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.DELETE
    }
}
