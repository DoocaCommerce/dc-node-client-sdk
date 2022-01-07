import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from '../../../Base/Request'

export interface BrandDeleteRequestParams {
    id: number
}

export class BrandDeleteRequest implements Request {
    constructor(private params: BrandDeleteRequestParams) {}

    getUrl(): string {
        return `/brands/${this.params.id}`
    }

    getMethod(): HttpMethodEnum {
        return HttpMethodEnum.DELETE
    }
}
