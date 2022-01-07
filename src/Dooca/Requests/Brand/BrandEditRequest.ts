import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { BrandCreateRequestParams } from './BrandCreateRequest'

export interface BrandEditRequestParams extends BrandCreateRequestParams {
    id: number
}

export class BrandEditRequest implements RequestPayload {
    constructor(private params: BrandEditRequestParams) {}

    getUrl(): string {
        return `/brands/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
