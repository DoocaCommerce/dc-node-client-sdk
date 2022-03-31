import { HttpMethodEnum } from 'dc-node-backend'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface CategoryGetOneRequestParams {
    id: number
}

export class CategoryGetOneRequest extends Request {
    constructor(private params: CategoryGetOneRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.CATEGORIES}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
