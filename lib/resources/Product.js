'use strict';

var api = require('./../api');

let httpMethod = 'GET';
let endpoint = '/v1/products/';

function product(id) {
  let _endpoint = endpoint + id;

  return api.executeHttp(httpMethod, _endpoint);
}

module.exports = product;
