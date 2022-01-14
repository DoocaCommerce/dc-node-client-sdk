import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { BaseUriEnum } from '../Shared/BaseUriEnum'
import { VariationCreateRequestParams } from './VariationCreateRequest'

export interface VariationUpdateRequestParams
    extends Omit<Partial<VariationCreateRequestParams>, 'balance'> {
    id: number
}

export class VariationUpdateRequest extends RequestPayload {
    constructor(private params: VariationUpdateRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.VARIATIONS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
