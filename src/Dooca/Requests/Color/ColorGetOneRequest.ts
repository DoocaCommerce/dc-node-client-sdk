import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface ColorGetOneRequestParams {
    id: number
}

export class ColorGetOneRequest extends Request {
    constructor(private params: ColorGetOneRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.COLORS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
