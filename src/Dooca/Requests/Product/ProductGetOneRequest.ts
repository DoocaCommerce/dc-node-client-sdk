import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../Shared/BaseUriEnum'

export interface ProductGetOneRequestParams {
    id: number
}

export class ProductGetOneRequest extends Request {
    constructor(private params: ProductGetOneRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.PRODUCTS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
