'use strict';

var api = require('./api');
var config = require('./config');

function configure(options) {
  api.configure(options);
}

module.exports = {
  configure: configure,
  products: require('./resources/Products'),
  product: require('./resources/Product'),
  account: require('./resources/Account'),
  order: require('./resources/Order'),
};

