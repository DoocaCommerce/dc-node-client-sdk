import { DoocaClient } from '../../../DoocaClient'
import { BrandListRequest } from '../BrandListRequest'
import { BrandGetOneRequest } from '../BrandGetOneRequest'
import { BrandCreateRequest } from '../BrandCreateRequest'
import { BrandUpdateRequest } from '../BrandUpdateRequest'
import { BrandDeleteRequest } from '../BrandDeleteRequest'
// import { ClientFactory } from '../../../__Test__/ClientFactoryTest'
import { ClientTest } from '../../../__Test__/ClientTest'

// jest.mock('dc-node-backend/lib/Http/Client', () => ({ ...ClientFactory }))
jest.mock('dc-node-backend/lib/Http/Client', () => {
    return {
        ClientFactory: {
            getInstance: () => new ClientTest()
        }
    }
})

describe('Brand requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('GET /brands', async () => {
        const res = await client.send(new BrandListRequest())

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /brands/:id', async () => {
        const res = await client.send(new BrandGetOneRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('POST /brands', async () => {
        const res = await client.send(new BrandCreateRequest({ name: 'Adidas' }))

        expect(res.getStatusCode()).toBe(201)
    })

    test('PUT /brands/:id', async () => {
        const res = await client.send(new BrandUpdateRequest({ id: 1, name: `Adidas [UPDATED]` }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('DELETE /brands/:id', async () => {
        const res = await client.send(new BrandDeleteRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(204)
    })
})
