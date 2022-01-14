import { DoocaClient } from '../../../DoocaClient'
import { AttributeListRequest } from '../AttributeListRequest'
import { AttributeGetOneRequest } from '../AttributeGetOneRequest'
import { AttributeCreateRequest } from '../AttributeCreateRequest'
import { AttributeUpdateRequest } from '../AttributeUpdateRequest'
import { AttributeDeleteRequest } from '../AttributeDeleteRequest'
import { ClientTest } from '../../../__Test__/ClientTest'

jest.mock('dc-node-backend/lib/Http/Client', () => {
    return {
        ClientFactory: {
            getInstance: () => new ClientTest()
        }
    }
})

describe('Attribute requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('GET /attributes', async () => {
        const res = await client.send(new AttributeListRequest())

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /attributes/:id', async () => {
        const res = await client.send(new AttributeGetOneRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('POST /attributes', async () => {
        const res = await client.send(new AttributeCreateRequest({ name: 'Tamanho' }))

        expect(res.getStatusCode()).toBe(201)
    })

    test('PUT /attributes/:id', async () => {
        const res = await client.send(
            new AttributeUpdateRequest({ id: 1, name: `Tamanho [UPDATED]` })
        )

        expect(res.getStatusCode()).toBe(200)
    })

    test('DELETE /attributes/:id', async () => {
        const res = await client.send(new AttributeDeleteRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(204)
    })
})
