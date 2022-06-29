import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend'
import { BaseUrlCustomersEnum } from './Shared/BaseUrlCustomersEnum'

export interface CustomerGetOneCgcRequestParams {
    cgc: string
}

export class CustomerGetOneCgcRequest extends Request {
    constructor(private params: CustomerGetOneCgcRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.CUSTOMERS}/${BaseUrlCustomersEnum.CGC}/${this.params.cgc}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
