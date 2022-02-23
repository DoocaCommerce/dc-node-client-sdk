import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { ProductCreateRequestParams } from './ProductCreateRequest'

export interface ProductUpdateRequestParams extends Partial<ProductCreateRequestParams> {
    id: number
}

export class ProductUpdateRequest extends RequestPayload {
    constructor(private params: ProductUpdateRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.PRODUCTS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
