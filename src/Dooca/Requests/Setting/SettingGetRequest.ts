import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export class SettingGetRequest extends Request {
    constructor() {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.API_SETTINGS}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
