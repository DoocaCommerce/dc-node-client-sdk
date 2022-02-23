import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { ActiveEnum } from '../../../Shared/ActiveEnum'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { ImageParams } from '../../../Shared/ImageParams'

export interface ColorCreateRequestParams {
    external_id?: string
    name: string
    hexadecimal?: string
    image?: ImageParams
    slug?: string
    position?: number
    active?: ActiveEnum
}

export class ColorCreateRequest extends RequestPayload {
    constructor(private params: ColorCreateRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.COLORS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
