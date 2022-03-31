import { HttpMethodEnum } from 'dc-node-backend'
import { RequestPayload } from '../../../Base/RequestPayload'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { AttributeValueCreateRequestParams } from './AttributeValueCreateRequest'

export interface AttributeValueUpdateRequestParams
    extends Partial<AttributeValueCreateRequestParams> {
    id: number
}

export class AttributeValueUpdateRequest extends RequestPayload {
    constructor(private params: AttributeValueUpdateRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.ATTRIBUTE_VALUES}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
