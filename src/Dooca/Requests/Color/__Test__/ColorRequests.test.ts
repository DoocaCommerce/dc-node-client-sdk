import { DoocaClient } from '../../../DoocaClient'
import { ColorListRequest } from '../ColorListRequest'
import { ColorGetOneRequest } from '../ColorGetOneRequest'
import { ColorCreateRequest } from '../ColorCreateRequest'
import { ColorUpdateRequest } from '../ColorUpdateRequest'
import { ColorDeleteRequest } from '../ColorDeleteRequest'
import { ClientTest } from '../../../__Test__/ClientTest'

jest.mock('dc-node-backend/lib/Http/Client', () => {
    return {
        ClientFactory: {
            getInstance: () => new ClientTest()
        }
    }
})

describe('Color requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('GET /colors', async () => {
        const res = await client.send(
            new ColorListRequest().setQueryParams({
                limit: 25,
                page: 1
            })
        )

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /colors/:id', async () => {
        const res = await client.send(new ColorGetOneRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('POST /colors', async () => {
        const res = await client.send(new ColorCreateRequest({ name: 'Vermelho' }))

        expect(res.getStatusCode()).toBe(201)
    })

    test('PUT /colors/:id', async () => {
        const res = await client.send(new ColorUpdateRequest({ id: 1, name: `Vermelho [UPDATED]` }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('DELETE /colors/:id', async () => {
        const res = await client.send(new ColorDeleteRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(204)
    })
})
