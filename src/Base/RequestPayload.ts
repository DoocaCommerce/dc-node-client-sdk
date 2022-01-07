import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'
import { Request } from './Request'

export abstract class RequestPayload implements Request {
    abstract getUrl(): string
    abstract getMethod(): HttpMethodEnum
    abstract getPayload(): any
}
