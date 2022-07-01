import { OrderCreateRequest, OrderCreateRequestParams } from '../../Dooca/Requests/Order'
import { BaseUriEnum } from '../../Shared/BaseUriEnum'
import { BaseUriIntegratorEnum } from '../Shared/BaseUriIntegratorEnum'
import { IntegratorDataSource } from '../Shared/IntegratorDataSource'

export type RequestHeaders = { [key: string]: string }

export class OrderCreateIntegratorRequest extends OrderCreateRequest {
    constructor(private source: IntegratorDataSource, params: OrderCreateRequestParams) {
        super(params)
    }

    getUrl(): string {
        return `/${BaseUriIntegratorEnum.INTEGRATOR}/${BaseUriIntegratorEnum.IMPORT}${BaseUriEnum.ORDERS}`
    }

    getHeaders(): RequestHeaders {
        return {
            'dc-action': 'insert',
            'dc-source': this.source
        }
    }
}
