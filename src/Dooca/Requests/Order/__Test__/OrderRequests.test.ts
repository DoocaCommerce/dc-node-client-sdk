import { DoocaClient } from '../../../DoocaClient'
import { ClientTest } from '../../../__Test__/ClientTest'
import { OrderCreateRequest } from '../OrderCreateRequest'
import { OrderGetByTokenRequest } from '../OrderGetByTokenRequest'
import { OrderGetOneRequest } from '../OrderGetOneRequest'
import { OrderListRequest } from '../OrderListRequest'
import { OrderUpdateRequest } from '../OrderUpdateRequest'

jest.mock('dc-node-backend/lib/Http/Client', () => {
    return {
        ClientFactory: {
            getInstance: () => new ClientTest()
        }
    }
})

describe('Order requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('POST /orders', async () => {
        const res = await client.send(
            new OrderCreateRequest({
                customer_id: 1,
                note: null,
                address: {
                    receiver: 'FABIANA DE LIMA',
                    zipcode: '51160070',
                    street: 'Rua Jorge de Lima',
                    number: '245',
                    detail: 'APT 1305',
                    district: 'Imbiribeira',
                    city: 'Recife',
                    state: 'PE'
                },
                payment: {
                    name: 'Cartão de crédito',
                    method: 'creditcard',
                    parcels: '1',
                    parcel_price: '250.92',
                    card_brand: 'mastercard'
                },
                shipping: {
                    name: 'PAC',
                    price: '19.93',
                    shipment_time: '0',
                    delivery_time: '14'
                },
                items: [
                    {
                        name: 'SAIA JULIA LISTRADO',
                        variation: '42',
                        total: 230.99,
                        quantity: 1,
                        price: '230.99'
                    }
                ]
            })
        )

        expect(res.getStatusCode()).toBe(201)
    })

    test('PUT /orders/:id', async () => {
        const res = await client.send(
            new OrderUpdateRequest({
                id: 1,
                note: 'Nota alterada'
            })
        )

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /orders/:id', async () => {
        const res = await client.send(new OrderGetOneRequest({ id: 1 }))

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /orders/token/:token', async () => {
        const res = await client.send(
            new OrderGetByTokenRequest({ token: 'PVk3UW9ShDeA4CsziILUiOcJCfUuZRENGv3A' })
        )

        expect(res.getStatusCode()).toBe(200)
    })

    test('GET /orders', async () => {
        const res = await client.send(
            new OrderListRequest({
                limit: 25,
                page: 1
            })
        )

        expect(res.getStatusCode()).toBe(200)
    })
})
