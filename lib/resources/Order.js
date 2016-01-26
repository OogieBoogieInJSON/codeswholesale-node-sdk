'use strict';

var api = require('./../api');

let httpMethod = 'GET';
let endpoint = '/v1/orders/';

function order(id, quantity) {
  let requestPayload = {
    productId: id,
    quantity: quantity || 1
  };

  return api.executeHttp(httpMethod, endpoint, requestPayload);
}

module.exports = order;
