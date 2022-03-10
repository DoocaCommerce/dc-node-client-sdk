import { DoocaClient } from '../../../DoocaClient'
import { ShopListByAppRequest } from '../ShopListByAppRequest'
import { ClientTest } from '../../../__Test__/ClientTest'

jest.mock('dc-node-backend/lib/Http/Client', () => {
    return {
        ClientFactory: {
            getInstance: () => new ClientTest()
        }
    }
})

describe('Shop requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('GET /shops/app/:slug', async () => {
        const res = await client.send(new ShopListByAppRequest('macle'))

        expect(res.getStatusCode()).toBe(200)
    })
})
