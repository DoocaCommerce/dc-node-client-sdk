import { DoocaClient } from '../../../DoocaClient'
import { SettingGetRequest } from '../SettingGetRequest'
import { ClientTest } from '../../../__Test__/ClientTest'

jest.mock('dc-node-backend/lib/Http/Client', () => {
    return {
        ClientFactory: {
            getInstance: () => new ClientTest()
        }
    }
})

describe('Settings requests', () => {
    let client: DoocaClient

    beforeAll(() => {
        client = DoocaClient.create({
            baseUrl: process.env.BASE_URL || '',
            token: process.env.TOKEN || ''
        })
    })

    test('GET /api_settings', async () => {
        const res = await client.send(new SettingGetRequest())

        expect(res.getStatusCode()).toBe(200)
    })
})
