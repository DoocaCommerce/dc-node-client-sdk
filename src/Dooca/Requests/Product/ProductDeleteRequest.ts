import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../Shared/BaseUriEnum'

export interface ProductDeleteRequestParams {
    id: number
}

export class ProductDeleteRequest extends Request {
    constructor(private params: ProductDeleteRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.PRODUCTS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.DELETE
    }
}
