# codeswholesale-node-sdk
Node wrapper with promises for codeswholesale API

![Build status](https://travis-ci.org/OogieBoogieInJSON/codeswholesale-node-sdk.svg?branch=master)

## Installation
```
$ npm install codeswholesale-node-sdk --save
```

## Usage
```js
const cws = require('codeswholesale-node-sdk');

// Configure
cws.configure({
  host: 'https://api.codeswholesale.com',
  client_id: 'your_client_id',
  client_secret: 'your_client_secret'
});

// Get all products
cws
  .products()
  .then((receivedProducts) => {
    // do something
  })
  .catch((err) => {
    // error is here
  });
```

## API
#### configure (options)
Set-up credentials and URL for your requests. You can pass the sandbox or live URL to codeswholesale APIs to properly work in dev or production.

```js
cws.configure({
  host: 'https://api.codeswholesale.com', // or https://sandbox.codeswholesale.com
  client_id: 'your_client_id',
  client_secret: 'your_client_secret',
  grant_type: 'client_credentials' // optional, it is handled by the sdk
});
```

#### products
Get all products.

```js
cws
  .products()
  .then((receivedProducts) => {
    // do something
  })
  .catch((err) => {
    // error is here
  });
```

#### product (productId)
Get details for a product.

```js
let productId = '1234-2345-556-4566'; // example

cws
  .product(productId)
  .then((productDetails) => {
    // do something
  })
  .catch((err) => {
    // error is here
  });
```

#### account
Get all details about your current account.

```js
cws
  .account()
  .then((accountDetails) => {
    // do something
  })
  .catch((err) => {
    // error is here
  });
```

#### order (productId, quantity)
Create an order (buy key/keys). You can buy one or more keys for the same product by passing a different quantity.
Currently you must pass the quantity but for future releases it will be handled with a default value of 1.

```js
let productId = '1234-2345-556-4566'; // example

cws
  .order(productId, 1)
  .then((keys) => {
    // do something
  })
  .catch((err) => {
    // error is here
  });
```

## License
MIT © [Mircea Pop](https://github.com/OogieBoogieInJSON)
