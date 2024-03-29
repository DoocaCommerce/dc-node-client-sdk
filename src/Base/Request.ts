import { HttpMethodEnum } from 'dc-node-backend'
import { stringify } from 'querystring'

export type QueryParam = Record<'name' | 'value', any>

export abstract class Request<PARAMS = any> {
    protected query: Record<string, any> = {}

    abstract getUrl(): string
    abstract getMethod(): HttpMethodEnum

    hasPayload(): boolean {
        return false
    }

    setQueryParams(values: PARAMS): Request<PARAMS> {
        for (const key in values) {
            this.query[key] = values[key]
        }
        return this
    }

    getQueryString(): string {
        const query = Object.assign({}, this.query)

        if (query.sort) {
            const direction = query.sort.direction === 'asc' ? '' : '-'
            query.sort = direction + query.sort.field
        }

        return '?' + stringify(query)
    }

    hasQuery(): boolean {
        return Object.keys(this.query).length > 0
    }

    getHeaders(): { [key: string]: string } {
        return {}
    }
}
