import { SortPaginationQueryParams } from './SortPaginationQueryParams'

export interface PaginationQueryParams {
    page?: number
    limit?: number
    sort?: SortPaginationQueryParams
    q?: string
}
