'use strict';

var api = require('./../api');

let httpMethod = 'GET';
let endpoint = '/v1/products/';

function product(id) {
  endpoint = endpoint + id;

  return api.executeHttp(httpMethod, endpoint);
}

module.exports = product;
