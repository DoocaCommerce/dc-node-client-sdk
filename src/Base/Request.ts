import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export abstract class Request {
    abstract getUrl(): string
    abstract getMethod(): HttpMethodEnum

    hasPayload(): boolean {
        return false
    }
}
