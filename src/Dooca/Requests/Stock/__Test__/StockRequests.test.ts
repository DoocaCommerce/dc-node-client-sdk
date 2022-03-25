import { DoocaClient } from '../../../DoocaClient'
import { StockListRequest } from '../StockListRequest'
import { StockMassUpdateRequest } from '../StockMassUpdateRequest'
import { ClientTest } from '../../../__Test__/ClientTest'

jest.mock('dc-node-backend/lib/Http/Client', () => {
    return {
        ClientFactory: {
            getInstance: () => new ClientTest()
        }
    }
})

describe('Stock requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('GET /stocks', async () => {
        const res = await client.send(new StockListRequest())

        expect(res.getStatusCode()).toBe(200)
    })

    test('PUT /stocks', async () => {
        const res = await client.send(
            new StockMassUpdateRequest([
                { variation_id: 1, balance: 1 },
                { variation_id: 2, balance: 2 }
            ])
        )

        expect(res.getStatusCode()).toBe(200)
    })
})
