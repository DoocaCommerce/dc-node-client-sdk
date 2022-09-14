import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base'

export interface SettingPutRequest {
    shop_marketplace?: Record<string, any>
}

export class SettingPutRequest extends RequestPayload {
   
    constructor(private params: SettingPutRequest) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.SETTINGS}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
