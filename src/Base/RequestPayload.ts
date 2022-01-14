import { Request } from './Request'

export abstract class RequestPayload extends Request {
    abstract getPayload(): any

    hasPayload(): boolean {
        return true
    }
}
