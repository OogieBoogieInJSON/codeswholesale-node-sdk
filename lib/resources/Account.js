'use strict';

var api = require('./../api');

let httpMethod = 'GET';
let endpoint = '/v1/accounts/current/';

function account() {
  return api.executeHttp(httpMethod, endpoint);
}

module.exports = account;
