import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { BrandCreateRequestParams } from './BrandCreateRequest'

export interface BrandUpdateRequestParams extends Partial<BrandCreateRequestParams> {
    id: number
}

export class BrandUpdateRequest extends RequestPayload {
    constructor(private params: BrandUpdateRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.BRANDS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
