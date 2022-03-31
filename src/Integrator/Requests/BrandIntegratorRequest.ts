import { HttpMethodEnum } from 'dc-node-backend'
import { RequestPayload } from '../../Base'
import { BrandUpdateRequestParams } from '../../Dooca/Requests/Brand'
import { BaseUriEnum } from '../../Shared/BaseUriEnum'
import { BaseUriIntegratorEnum } from '../Shared/BaseUriIntegratorEnum'

export interface BrandIntegratorRequestParams extends Partial<BrandUpdateRequestParams> {}

export class BrandIntegratorRequest extends RequestPayload {
    constructor(private params: BrandIntegratorRequestParams) {
        super()
    }

    getUrl(): string {
        return BaseUriIntegratorEnum.INTEGRATOR + '/' + BaseUriEnum.BRANDS
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.POST
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
