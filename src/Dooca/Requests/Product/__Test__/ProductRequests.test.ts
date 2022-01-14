import { DoocaClient } from '../../../DoocaClient'
import { ProductListRequest } from '../ProductListRequest'
import { ProductGetOneRequest } from '../ProductGetOneRequest'
import { ProductCreateRequest } from '../ProductCreateRequest'
import { ProductUpdateRequest } from '../ProductUpdateRequest'
import { ProductDeleteRequest } from '../ProductDeleteRequest'
import { ClientTest } from '../../../__Test__/ClientTest'

jest.mock('dc-node-backend/lib/Http/Client', () => {
    return {
        ClientFactory: {
            getInstance: () => new ClientTest()
        }
    }
})

describe('Product requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('GET /products', async () => {
        const res = await client.send(new ProductListRequest())

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /products/:id', async () => {
        const res = await client.send(new ProductGetOneRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('POST /products', async () => {
        const res = await client.send(new ProductCreateRequest({ name: 'Produto teste' }))

        expect(res.getStatusCode()).toBe(201)
    })

    test('PUT /products/:id', async () => {
        const res = await client.send(
            new ProductUpdateRequest({ id: 1, name: `Produto teste [UPDATED]` })
        )

        expect(res.getStatusCode()).toBe(200)
    })

    test('DELETE /products/:id', async () => {
        const res = await client.send(new ProductDeleteRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(204)
    })
})
