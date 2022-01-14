import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { ActiveEnum } from '../Shared/ActiveEnum'
import { AgeGroupEnum } from '../Shared/AgeGroupEnum'
import { BaseUriEnum } from '../Shared/BaseUriEnum'
import { GenderEnum } from '../Shared/GenderEnum'
import { VariationCreateRequestParams } from '../Variation/VariationCreateRequest'

export interface ProductCreateRequestParams {
    category_default_id?: number
    brand_id?: number
    hotsite_id?: number
    external_id?: string
    name?: string
    description?: string
    short_description?: string
    relevance?: boolean
    tags?: string
    price?: number
    price_compare?: number
    cost?: number
    billet_discount?: number
    weight?: number
    depth?: number
    width?: number
    height?: number
    balance?: number
    min_quantity?: number
    max_quantity?: number
    sell_in_kit_only?: boolean
    sell_out_of_stock?: boolean
    price_out_of_stock?: number
    additional_time_out_of_stock?: number
    kit?: boolean
    kit_markup?: number
    video?: string
    st?: boolean
    ncm?: string
    ipi?: number
    gender?: GenderEnum
    age_group?: AgeGroupEnum
    warranty?: string
    model?: string
    stock_location?: string
    is_virtual?: boolean
    is_pre_sale?: boolean
    has_gift_wrapping?: boolean
    slug?: string
    meta_title?: string
    meta_description?: string
    meta_keywords?: string
    active?: ActiveEnum

    variations?: Partial<VariationCreateRequestParams>[]
    feature_ids?: number[]
    // images: []
}

export class ProductCreateRequest extends RequestPayload {
    constructor(private params: ProductCreateRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.PRODUCTS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
