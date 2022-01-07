import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'

export interface QueryBrandRequestParams {
    id: number
}

export class QueryBrandRequest implements Request {
    constructor(private params: QueryBrandRequestParams) {}

    getUrl(): string {
        return `/brands/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.GET
    }
}
