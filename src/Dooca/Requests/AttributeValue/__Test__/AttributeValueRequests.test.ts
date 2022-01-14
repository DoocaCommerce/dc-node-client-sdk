import { DoocaClient } from '../../../DoocaClient'
import { AttributeValueListRequest } from '../AttributeValueListRequest'
import { AttributeValueGetOneRequest } from '../AttributeValueGetOneRequest'
import { AttributeValueCreateRequest } from '../AttributeValueCreateRequest'
import { AttributeValueUpdateRequest } from '../AttributeValueUpdateRequest'
import { AttributeValueDeleteRequest } from '../AttributeValueDeleteRequest'
import { ClientTest } from '../../../__Test__/ClientTest'

jest.mock('dc-node-backend/lib/Http/Client', () => {
    return {
        ClientFactory: {
            getInstance: () => new ClientTest()
        }
    }
})

describe('Attribute value requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('GET /attribute_values', async () => {
        const res = await client.send(new AttributeValueListRequest())

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /attribute_values/:id', async () => {
        const res = await client.send(new AttributeValueGetOneRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('POST /attribute_values', async () => {
        const res = await client.send(new AttributeValueCreateRequest({ name: 'Tamanho' }))

        expect(res.getStatusCode()).toBe(201)
    })

    test('PUT /attribute_values/:id', async () => {
        const res = await client.send(
            new AttributeValueUpdateRequest({ id: 1, name: `Tamanho [UPDATED]` })
        )

        expect(res.getStatusCode()).toBe(200)
    })

    test('DELETE /attribute_values/:id', async () => {
        const res = await client.send(new AttributeValueDeleteRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(204)
    })
})
