import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { ActiveEnum } from '../Shared/ActiveEnum'
import { ImageParams } from '../Shared/ImageParams'

export interface CreateBrandRequestParams {
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

export class CreateBrandRequest implements RequestPayload {
    constructor(private params: CreateBrandRequestParams) {}

    getUrl(): string {
        return '/brands'
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
