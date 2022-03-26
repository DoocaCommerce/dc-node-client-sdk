# Dooca API Node SDK Client

O objetivo deste SDK é facilitar a comunicação com a API da Dooca Commerce via Javascript.

# Instalação

```
npm i https://github.com/DoocaCommerce/dc-node-client-sdk.git
```

# Instanciando o Client da API

```ts
import { DoocaClient } from 'dc-node-client-sdk'

const client = DoocaClient.create({
    baseUrl: '<DOOCA_API_URL>',
    token: '<DOOCA_API_ACCESS_TOKEN>'
})
```

# Utilizando os Requests

Cada rota disponível no Client possui um Request específico para ser utilizado. Estes possuem todas as informações e métodos para fazer um request numa determinada rota da API.

Todos os Requests possuem um método `setQueryParams`, que serve para definir os parâmetros da URL. Ele será usado mais frequentemente em listagens, mas está disponível para qualquer requisição.

## Exemplo de listagem

```ts
import { BrandListRequest, BrandListQueryParams } from 'dc-node-client-sdk'

const query: BrandListQueryParams = {
    limit: 25,
    page: 1,
    sort: {
        field: 'created_at',
        direction: 'desc'
    }
}

const request = new BrandListRequest().setQueryParams(query)

const response = await client.send(request)
```

## Buscando um único registro

```ts
import { BrandGetOneRequest } from 'dc-node-client-sdk'

const request = new BrandGetOneRequest({ id: 1 })

const response = await client.send(request)
```

## Criando um registro

```ts
import { BrandCreateRequest } from 'dc-node-client-sdk'

const request = new BrandCreateRequest({ name: 'Adidas' })

const response = await client.send(request)
```

## Atualizando um registro

```ts
import { BrandUpdateRequest } from 'dc-node-client-sdk'

const request = new BrandUpdateRequest({
    id: 1,
    name: 'Adidas',
    description: 'Lorem ipsum dolor sit amet'
})

const response = await client.send(request)
```

## Deletando um registro

```ts
import { BrandDeleteRequest } from 'dc-node-client-sdk'

const request = new BrandDeleteRequest({ id: 1 })

const response = await client.send(request)
```

## Requests disponíveis

-   <ins>**Attribute**</ins>
    -   AttributeListRequest
    -   AttributeGetOneRequest
    -   AttributeCreateRequest
    -   AttributeUpdateRequest
    -   AttributeDeleteRequest
-   <ins>**AttributeValue**</ins>
    -   AttributeValueListRequest
    -   AttributeValueGetOneRequest
    -   AttributeValueCreateRequest
    -   AttributeValueUpdateRequest
    -   AttributeValueDeleteRequest
-   <ins>**Brand**</ins>
    -   BrandListRequest
    -   BrandGetOneRequest
    -   BrandCreateRequest
    -   BrandUpdateRequest
    -   BrandDeleteRequest
-   <ins>**Category**</ins>
    -   CategoryListRequest
    -   CategoryGetOneRequest
    -   CategoryCreateRequest
    -   CategoryUpdateRequest
    -   CategoryDeleteRequest
-   <ins>**Color**</ins>
    -   ColorListRequest
    -   ColorGetOneRequest
    -   ColorCreateRequest
    -   ColorUpdateRequest
    -   ColorDeleteRequest
-   <ins>**Product**</ins>
    -   ProductListRequest
    -   ProductGetOneRequest
    -   ProductCreateRequest
    -   ProductUpdateRequest
    -   ProductDeleteRequest
-   <ins>**Stock**</ins>
    -   StockListRequest
    -   StockMassUpdateRequest
-   <ins>**Variation**</ins>
    -   VariationListRequest
    -   VariationGetOneRequest
    -   VariationCreateRequest
    -   VariationUpdateRequest
    -   VariationDeleteRequest
-   <ins>**Customer**</ins>
    -   CustomerCreateRequest
    -   CustomerDeleteRequest
    -   CustomerGetOneRequest
    -   CustomerListRequest
    -   CustomerUpdateRequest
-   <ins>**Order**</ins>
    -   OrderCreateRequest
    -   OrderGetByTokenRequest
    -   OrderGetOneRequest
    -   OrderListRequest
    -   OrderUpdateRequest
