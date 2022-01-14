import { DoocaClient } from '../../../DoocaClient'
import { VariationListRequest } from '../VariationListRequest'
import { VariationGetOneRequest } from '../VariationGetOneRequest'
import { VariationCreateRequest } from '../VariationCreateRequest'
import { VariationUpdateRequest } from '../VariationUpdateRequest'
import { VariationDeleteRequest } from '../VariationDeleteRequest'
import { ClientTest } from '../../../__Test__/ClientTest'

jest.mock('dc-node-backend/lib/Http/Client', () => {
    return {
        ClientFactory: {
            getInstance: () => new ClientTest()
        }
    }
})

describe('Variation requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('GET /variations', async () => {
        const res = await client.send(new VariationListRequest())

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /variations/:id', async () => {
        const res = await client.send(new VariationGetOneRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('POST /variations', async () => {
        const res = await client.send(new VariationCreateRequest({ product_id: 1, color_id: 1 }))

        expect(res.getStatusCode()).toBe(201)
    })

    test('PUT /variations/:id', async () => {
        const res = await client.send(new VariationUpdateRequest({ id: 1, color_id: 2 }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('DELETE /variations/:id', async () => {
        const res = await client.send(new VariationDeleteRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(204)
    })
})
