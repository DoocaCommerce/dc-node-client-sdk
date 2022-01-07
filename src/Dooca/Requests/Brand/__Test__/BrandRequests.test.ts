import { DoocaClient } from '../../../DoocaClient'
import { BrandGetRequest } from '../'
import { BrandListRequest } from '../BrandListRequest'

describe('Brands Requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('Get Brand', async () => {
        const res = await client.send(new BrandGetRequest({ id: 2538 }))
        expect(res.getStatusCode()).toBe(200)
    })

    test('List Brands', async () => {
        const res = await client.send(new BrandListRequest())
        expect(res.getStatusCode()).toBe(200)
    })
})
