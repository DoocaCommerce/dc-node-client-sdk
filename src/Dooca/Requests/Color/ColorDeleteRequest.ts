import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface ColorDeleteRequestParams {
    id: number
}

export class ColorDeleteRequest extends Request {
    constructor(private params: ColorDeleteRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.COLORS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.DELETE
    }
}
