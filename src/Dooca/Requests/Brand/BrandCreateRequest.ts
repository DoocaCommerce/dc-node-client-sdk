import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { ActiveEnum } from '../Shared/ActiveEnum'
import { BaseUriEnum } from '../Shared/BaseUriEnum'
import { ImageParams } from '../Shared/ImageParams'

export interface BrandCreateRequestParams {
    name?: string
    external_id?: number
    active?: ActiveEnum
    description?: string
    image?: ImageParams
    meta_title?: string
    meta_keywords?: string
    meta_description?: string
    short_description?: string
    position?: number
    banner?: ImageParams
}

export class BrandCreateRequest extends RequestPayload {
    constructor(private params: BrandCreateRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.BRANDS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
