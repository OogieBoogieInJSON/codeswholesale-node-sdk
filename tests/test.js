var sdk = require('./../lib/codeswholesale-node-sdk');
var utils = require('./../lib/utils');

sdk.configure({
  host: 'https://sandbox.codeswholesale.com',
  client_id: 'ff72ce315d1259e822f47d87d02d261e',
  client_secret: '$2a$10$E2jVWDADFA5gh6zlRVcrlOOX01Q/HJoT6hXuDMJxek.YEo.lkO2T6'
});

sdk.executeHttp('GET', '/v1/products')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

