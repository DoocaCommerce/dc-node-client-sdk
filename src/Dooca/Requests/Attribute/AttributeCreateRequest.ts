import { HttpMethodEnum } from 'dc-node-backend'
import { RequestPayload } from '../../../Base/RequestPayload'
import { ActiveEnum } from '../../../Shared/ActiveEnum'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'

export interface AttributeCreateRequestParams {
    external_id?: string
    name: string
    slug?: string
    position?: number
    active?: ActiveEnum
}

export class AttributeCreateRequest extends RequestPayload {
    constructor(private params: AttributeCreateRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.ATTRIBUTES
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
