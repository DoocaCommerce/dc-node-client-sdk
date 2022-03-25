import { DoocaClient } from '../../../DoocaClient'
import { ClientTest } from '../../../__Test__/ClientTest'
import { CustomerListRequest } from '../CustomerListRequest'
import { CustomerCreateRequest } from '../CustomerCreateRequest'
import { CustomerUpdateRequest } from '../CustomerUpdateRequest'
import { CustomerDeleteRequest } from '../CustomerDeleteRequest'
import { CustomerGetOneRequest } from '../CustomerGetOneRequest'

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
            new CustomerCreateRequest({
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
            new CustomerUpdateRequest({
                id: 1,
                first_name: 'Generic New Name',
                cgc: '01072046067',
                email: 'suporte@dooca.com.br'
            })
        )

        expect(res.getStatusCode()).toBe(200)
    })

    test('DELETE /customers/:id', async () => {
        const res = await client.send(new CustomerDeleteRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(204)
    })

    test('GET /customers/:id', async () => {
        const res = await client.send(new CustomerGetOneRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /customers', async () => {
        const res = await client.send(
            new CustomerListRequest().setQueryParams({
                limit: 25,
                page: 1
            })
        )

        expect(res.getStatusCode()).toBe(200)
    })
})
