import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { ActiveEnum } from '../Shared/ActiveEnum'
import { BaseUriEnum } from '../Shared/BaseUriEnum'
import { ImageParams } from '../Shared/ImageParams'

export interface CategoryCreateRequestParams {
    parent_id?: number
    hotsite_id?: number
    external_id?: string
    name: string
    description?: string
    image?: ImageParams
    banner?: ImageParams // TODO: verificar se esse campo é uma imagem
    banner_link?: string
    breadcrumb?: string
    breadcrumbs?: any // TODO: criar objeto para este campo
    depth?: number
    google_taxonomy_id?: number
    slug?: string
    meta_title?: string
    meta_description?: string
    meta_keywords?: string
    position?: number
    active?: ActiveEnum
}

export class CategoryCreateRequest extends RequestPayload {
    constructor(private params: CategoryCreateRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.CATEGORIES
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
