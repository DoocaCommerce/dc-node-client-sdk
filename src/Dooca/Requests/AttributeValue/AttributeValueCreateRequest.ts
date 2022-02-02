import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { ActiveEnum } from '../Shared/ActiveEnum'
import { BaseUriEnum } from '../Shared/BaseUriEnum'

export interface AttributeValueCreateRequestParams {
    attribute_id: number
    external_id?: string
    name: string
    slug?: string
    position?: number
    active?: ActiveEnum
}

export class AttributeValueCreateRequest extends RequestPayload {
    constructor(private params: AttributeValueCreateRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.ATTRIBUTE_VALUES
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
