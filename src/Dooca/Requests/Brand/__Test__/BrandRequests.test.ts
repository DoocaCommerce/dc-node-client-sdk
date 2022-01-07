import { config } from 'dotenv'
import path from 'path'
import { DoocaClient } from '../../../DoocaClient'
import { QueryBrandRequest } from '../QueryBrandRequest'

describe('Brands Requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('Query Brand', async () => {
        const res = await client.send(new QueryBrandRequest({ id: 2538 }))
        expect(res.getStatusCode()).toBe(200)
    })
})
