import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { AttributeCreateRequestParams } from './AttributeCreateRequest'

export interface AttributeUpdateRequestParams extends Partial<AttributeCreateRequestParams> {
    id: number
}

export class AttributeUpdateRequest extends RequestPayload {
    constructor(private params: AttributeUpdateRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.ATTRIBUTES}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
