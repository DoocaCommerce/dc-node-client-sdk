import { DoocaClient } from '../../../DoocaClient'
import { ClientTest } from '../../../__Test__/ClientTest'
import { CustomersListRequest } from '../CustomersListRequest'
import { CustomersCreateRequest } from '../CustomersCreateRequest'
import { CustomersUpdateRequest } from '../CustomersUpdateRequest'
import { CustomersDeleteRequest } from '../CustomersDeleteRequest'
import { CustomersGetOneRequest } from '../CustomersGetOneRequest'

jest.mock('dc-node-backend/lib/Http/Client', () => ({
    ClientFactory: {
        getInstance: () => new ClientTest()
    }
}))

describe('Customers requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('POST /customers', async () => {
        const res = await client.send(
            new CustomersCreateRequest({
                first_name: 'Suporte',
                last_name: 'Dooca',
                cgc: '73535102006',
                email: 'suporte@dooca.com.br',
                birthday: '1987-01-01',
                entity: 'individual'
            })
        )

        expect(res.getStatusCode()).toBe(201)
    })

    test('PUT /customers/:id', async () => {
        const res = await client.send(
            new CustomersUpdateRequest({
                id: 1,
                first_name: 'Generic New Name',
                cgc: '01072046067',
                email: 'suporte@dooca.com.br'
            })
        )

        expect(res.getStatusCode()).toBe(200)
    })

    test('DELETE /customers/:id', async () => {
        const res = await client.send(new CustomersDeleteRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(204)
    })

    test('GET /customers/:id', async () => {
        const res = await client.send(new CustomersGetOneRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /customers', async () => {
        const res = await client.send(
            new CustomersListRequest().setQueryParams({
                limit: 25,
                page: 1
            })
        )

        expect(res.getStatusCode()).toBe(200)
    })
})
