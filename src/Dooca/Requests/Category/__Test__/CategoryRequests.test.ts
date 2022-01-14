import { DoocaClient } from '../../../DoocaClient'
import { CategoryListRequest } from '../CategoryListRequest'
import { CategoryGetOneRequest } from '../CategoryGetOneRequest'
import { CategoryCreateRequest } from '../CategoryCreateRequest'
import { CategoryUpdateRequest } from '../CategoryUpdateRequest'
import { CategoryDeleteRequest } from '../CategoryDeleteRequest'
import { ClientTest } from '../../../__Test__/ClientTest'

jest.mock('dc-node-backend/lib/Http/Client', () => {
    return {
        ClientFactory: {
            getInstance: () => new ClientTest()
        }
    }
})

describe('Category requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('GET /categories', async () => {
        const res = await client.send(new CategoryListRequest())

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /categories/:id', async () => {
        const res = await client.send(new CategoryGetOneRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('POST /categories', async () => {
        const res = await client.send(new CategoryCreateRequest({ name: 'Sapatos' }))

        expect(res.getStatusCode()).toBe(201)
    })

    test('PUT /categories/:id', async () => {
        const res = await client.send(
            new CategoryUpdateRequest({ id: 1, name: `Sapatos [UPDATED]` })
        )

        expect(res.getStatusCode()).toBe(200)
    })

    test('DELETE /categories/:id', async () => {
        const res = await client.send(new CategoryDeleteRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(204)
    })
})
