# codeswholesale-node-sdk
Node wrapper with promises for codeswholesale API

**Note:** This package is not developed/related to codeswholesale dev team.

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

**Note:** Everything about authentication is handled internally, you don't have to worry about it.

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

## Alternatives / Related
[codeswholesale/codeswholesale-sdk-php](https://github.com/codeswholesale/codeswholesale-sdk-php) - API wrapper in PHP made by [codeswholesale](https://github.com/codeswholesale)

[OogieBoogieInJSON/laravel-codeswholesale](https://github.com/OogieBoogieInJSON/laravel-codeswholesale) - Laravel service provider for codeswholesale php sdk

**Note:** Feel free to add yours (pull request).

## TODO
  * Add PostBack Pre-order functionality
  * Add PostBack functionality for product updates
  * Add method for game cover

## License
MIT © [Mircea Pop](https://github.com/OogieBoogieInJSON)
