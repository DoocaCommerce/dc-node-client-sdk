import { Request } from '../../../Base/Request'
import { BaseUriEnum } from '../../../Shared/BaseUriEnum'
import { HttpMethodEnum } from 'dc-node-backend'
import { BaseUrlCustomersEnum } from './Shared/BaseUrlCustomersEnum'

export interface CustomerGetOneEmailRequestParams {
    email: string
}

export class CustomerGetOneEmailRequest extends Request {
    constructor(private params: CustomerGetOneEmailRequestParams) {
        super()
    }

    getUrl(): string {
        return `${BaseUriEnum.CUSTOMERS}/${BaseUrlCustomersEnum.EMAIL}/${this.params.email}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
