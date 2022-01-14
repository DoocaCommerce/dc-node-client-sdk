import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { BaseUriEnum } from '../Shared/BaseUriEnum'

export interface StockMassUpdateRequestParams {
    variation_id: number
    balance: number
    balance_ignore_reserved?: boolean
}

export class StockMassUpdateRequest extends RequestPayload {
    constructor(private params: StockMassUpdateRequestParams[]) {
        super()
    }

    getUrl(): string {
        return BaseUriEnum.STOCKS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
