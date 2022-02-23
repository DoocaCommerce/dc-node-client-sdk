import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface CategoryDeleteRequestParams {
    id: number
}

export class CategoryDeleteRequest extends Request {
    constructor(private params: CategoryDeleteRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.CATEGORIES}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.DELETE
    }
}
