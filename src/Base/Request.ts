import { HttpMethodEnum } from 'dc-node-backend/lib/Http/HttpMethodEnum'

export interface Request {
    getUrl(): string
    getMethod(): HttpMethodEnum
}
