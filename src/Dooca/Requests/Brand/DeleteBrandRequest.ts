import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'

export interface DeleteBrandRequestParams {
    id: number
}

export class DeleteBrandRequest implements Request {
    constructor(private params: DeleteBrandRequestParams) {}

    getUrl(): string {
        return `/brands/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.DELETE
    }
}
