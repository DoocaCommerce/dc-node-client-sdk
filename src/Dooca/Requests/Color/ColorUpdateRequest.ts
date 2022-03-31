import { HttpMethodEnum } from 'dc-node-backend'
import { RequestPayload } from '../../../Base/RequestPayload'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { ColorCreateRequestParams } from './ColorCreateRequest'

export interface ColorUpdateRequestParams extends Partial<ColorCreateRequestParams> {
    id: number
}

export class ColorUpdateRequest extends RequestPayload {
    constructor(private params: ColorUpdateRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.COLORS}/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
