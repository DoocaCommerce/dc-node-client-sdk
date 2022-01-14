import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { BaseUriEnum } from '../Shared/BaseUriEnum'
import { CategoryCreateRequestParams } from './CategoryCreateRequest'

export interface CategoryUpdateRequestParams extends CategoryCreateRequestParams {
    id: number
}

export class CategoryUpdateRequest extends RequestPayload {
    constructor(private params: CategoryUpdateRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.CATEGORIES}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
