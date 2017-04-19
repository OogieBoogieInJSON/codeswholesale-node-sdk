'use strict';

var config = require('./config');
var request = require('request');
var promise = require('bluebird');

let invoke = exports.invoke = function invoke(httpMethod, path, data, httpOptions, cb) {
  let url = config.defaultOptions.host + path;
  let requestOptions = {
    url: url,
    method: httpMethod
  };

  if(data) {
    Object.assign(requestOptions, {
      form: data
    });
  }

  if(httpOptions && httpOptions.token_type && httpOptions.access_token) {
    Object.assign(requestOptions, {
      headers: {
        Authorization: httpOptions.token_type + ' ' + httpOptions.access_token
      }
    });
  }

  function responseHandler(err, res, body) {
    if(err) {
      cb(err);
      return;
    }

    let parsedBody = JSON.parse(body);

    cb(null, res, parsedBody);
  }

  request(requestOptions, responseHandler);
};
