import { HttpMethodEnum } from 'dc-node-backend'
import { RequestPayload } from '../../../Base/RequestPayload'
import { ActiveEnum } from '../../../Shared/ActiveEnum'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface VariationCreateRequestParams {
    product_id: number
    color_id?: number
    color_secondary_id?: number
    attribute_value_id?: number
    attribute_value_secondary_id?: number
    external_id?: string
    reference?: string
    sku?: string
    gtin?: string
    mpn?: string
    price?: number
    price_compare?: number
    special_price?: number
    weight?: number
    depth?: number
    width?: number
    height?: number
    additional_shipping_time?: number
    balance?: number
    position?: number
    active?: ActiveEnum
}

export class VariationCreateRequest extends RequestPayload {
    constructor(private params: VariationCreateRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.VARIATIONS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
