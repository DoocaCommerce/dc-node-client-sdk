import { HttpMethodEnum } from 'dc-node-backend'
import { RequestPayload } from '../../Base'
import { StockMassUpdateRequestParams } from '../../Dooca/Requests/Stock'
import { BaseUriEnum } from '../../Shared/BaseUriEnum'
import { BaseUriIntegratorEnum } from '../Shared/BaseUriIntegratorEnum'

export interface StockIntegratorRequestParams extends Partial<StockMassUpdateRequestParams> {}

export class StockIntegratorRequest extends RequestPayload {
    constructor(private params: StockIntegratorRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriIntegratorEnum.INTEGRATOR + '/' + BaseUriEnum.STOCKS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
