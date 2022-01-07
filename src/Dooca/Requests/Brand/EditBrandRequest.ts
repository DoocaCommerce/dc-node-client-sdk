import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { RequestPayload } from '../../../Base/RequestPayload'
import { CreateBrandRequestParams } from './CreateBrandRequest'

export interface EditBrandRequestParams extends CreateBrandRequestParams {
    id: number
}

export class EditBrandRequest implements RequestPayload {
    constructor(private params: EditBrandRequestParams) {}

    getUrl(): string {
        return `/brands/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.PUT
    }

    getPayload() {
        return JSON.stringify(this.params)
    }
}
