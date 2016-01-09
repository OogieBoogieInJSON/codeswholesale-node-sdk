'use strict';

var api = require('./../api');

let httpMethod = 'GET';
let endpoint = '/v1/products/';

function products() {
  return api.executeHttp(httpMethod, endpoint);
}

module.exports = products;
