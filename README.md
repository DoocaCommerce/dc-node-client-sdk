# Dooca Node API SDK Client

O objetivo deste SDK é facilitar a comunicação com a API da Dooca Commerce via Javascript.

# Instalação

```
npm i https://github.com/DoocaCommerce/dc-node-client-sdk
```

# Instanciando o Client da API

```ts
import { DoocaClient } from 'DoocaClient'

const client = DoocaClient.create({
    baseUrl: 'https://api.dooca.store',
    token: { DOOCA_ACCESS_TOKEN }
})
```

# Utilizando os Requests

Cada rota disponível no Client possui um Request específico para ser utilizado. Estes possuem todas as informações e métodos para fazer um request numa determinada rota da API.

Todos os Requests possuem um método `setQueryParams`, que serve para definir os parâmetros da URL. Ele será usado mais frequentemente em listagens, mas está disponível para qualquer requisição.

## Exemplo de listagem

```ts
import { BrandListRequest } from 'BrandListRequest'

const query = {
    limit: 25,
    page: 1,
    sort: {
        field: 'created_at'
        direction: 'desc'
    }
}

const request = new BrandListRequest().setQueryParams(query)

const response = await client.send(request)
```

## Requests disponíveis

-   [Attribute](#attribute)
    -   AttributeListRequest
    -   AttributeGetOneRequest
    -   AttributeCreateRequest
    -   AttributeUpdateRequest
    -   AttributeDeleteRequest
-   [AttributeValue](#attributevalue)
    -   AttributeValueListRequest
    -   AttributeValueGetOneRequest
    -   AttributeValueCreateRequest
    -   AttributeValueUpdateRequest
    -   AttributeValueDeleteRequest
-   [Brand](#brand)
    -   BrandListRequest
    -   BrandGetOneRequest
    -   BrandCreateRequest
    -   BrandUpdateRequest
    -   BrandDeleteRequest
-   [Category](#category)
    -   CategoryListRequest
    -   CategoryGetOneRequest
    -   CategoryCreateRequest
    -   CategoryUpdateRequest
    -   CategoryDeleteRequest
-   [Color](#color)
    -   ColorListRequest
    -   ColorGetOneRequest
    -   ColorCreateRequest
    -   ColorUpdateRequest
    -   ColorDeleteRequest
-   [Product](#product)
    -   ProductListRequest
    -   ProductGetOneRequest
    -   ProductCreateRequest
    -   ProductUpdateRequest
    -   ProductDeleteRequest
-   [Stock](#stock)
    -   StockListRequest
    -   StockMassUpdateRequest
-   [Variation](#variation)
    -   VariationListRequest
    -   VariationGetOneRequest
    -   VariationCreateRequest
    -   VariationUpdateRequest
    -   VariationDeleteRequest
