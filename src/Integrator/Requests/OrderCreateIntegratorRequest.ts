import { OrderCreateRequest, OrderCreateRequestParams } from '../../Dooca/Requests/Order'
import { BaseUriIntegratorEnum } from '../Shared/BaseUriIntegratorEnum'
import { IntegratorDataSource } from '../Shared/IntegratorDataSource'

export type RequestHeaders = { [key: string]: string }

export class OrderCreateIntegratorRequest extends OrderCreateRequest {
    constructor(private source: IntegratorDataSource, params: OrderCreateRequestParams) {
        super(params)
    }

    getUrl(): string {
        return `/${BaseUriIntegratorEnum.INTEGRATOR}/${BaseUriIntegratorEnum.IMPORT}/${BaseUriIntegratorEnum.ORDER}`
    }

    getHeaders(): RequestHeaders {
        return {
            'x-source': this.source
        }
    }
}
