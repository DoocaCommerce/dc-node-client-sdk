import { OrderUpdateRequest, OrderUpdateRequestParams } from '../../Dooca/Requests/Order'
import { BaseUriEnum } from '../../Shared/BaseUriEnum'
import { BaseUriIntegratorEnum } from '../Shared/BaseUriIntegratorEnum'
import { IntegratorDataSource } from '../Shared/IntegratorDataSource'
import { RequestHeaders } from './OrderCreateIntegratorRequest'

export class OrderUpdateIntegratorRequest extends OrderUpdateRequest {
    constructor(private source: IntegratorDataSource, params: OrderUpdateRequestParams) {
        super(params)
    }

    getUrl(): string {
        return `${BaseUriIntegratorEnum.INTEGRATOR}/${BaseUriIntegratorEnum.IMPORT}/${BaseUriEnum.ORDERS}`
    }

    getHeaders(): RequestHeaders {
        return {
            'dc-action': 'update',
            'dc-source': this.source
        }
    }
}
