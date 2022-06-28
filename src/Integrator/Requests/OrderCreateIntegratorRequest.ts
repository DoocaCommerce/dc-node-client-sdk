import {
    OrderCreateRequest,
    OrderCreateRequestParams,
    OrderUpdateRequest,
    OrderUpdateRequestParams
} from '../../Dooca/Requests/Order'
import { BaseUriEnum } from '../../Shared/BaseUriEnum'
import { BaseUriIntegratorEnum } from '../Shared/BaseUriIntegratorEnum'

export type RequestHeaders = { [key: string]: string }

export enum IntegratorDataSource {
    APP = 'apps',
    API = 'api'
}

export class OrderCreateIntegratorRequest extends OrderCreateRequest {
    constructor(private source: IntegratorDataSource, params: OrderCreateRequestParams) {
        super(params)
    }

    getUrl(): string {
        return BaseUriIntegratorEnum.INTEGRATOR + '/' + BaseUriEnum.ORDERS
    }

    getHeaders(): RequestHeaders {
        return {
            'dc-action': 'insert',
            'dc-source': this.source
        }
    }
}

export class OrderUpdateIntegratorRequest extends OrderUpdateRequest {
    constructor(private source: IntegratorDataSource, params: OrderUpdateRequestParams) {
        super(params)
    }

    getUrl(): string {
        return BaseUriIntegratorEnum.INTEGRATOR + '/' + BaseUriEnum.ORDERS
    }

    getHeaders(): RequestHeaders {
        return {
            'dc-action': 'update',
            'dc-source': this.source
        }
    }
}
