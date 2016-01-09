'use strict';

var api = require('./api');
var config = require('./config');

function configure(options) {
  api.configure(options);
}

module.exports = {
  config: config.defaultOptions,
  configure: configure,
  generateToken: api.generateToken,
  executeHttp: api.executeHttp
};

