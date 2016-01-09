'use strict';

var promise = require('bluebird');
var config = require('./config');
var client = require('./client');
var utils = require('./utils');

let tokenPersist = {};

let configure = exports.configure = function configure(options) {
  if(options !== undefined && typeof options === 'object') {
    Object.assign(config.defaultOptions, options);
  }
};

let generateToken = exports.generateToken = function generateToken() {
  let requestPayload = {
    grant_type: config.defaultOptions.grant_type,
    client_id: config.defaultOptions.client_id,
    client_secret: config.defaultOptions.client_secret
  };

  return new promise((resolve, reject) => {
    client.invoke('POST', '/oauth/token', requestPayload, null, responseHandler);

    function responseHandler(err, res, body) {
      if(err) {
        reject(err);

        return;
      } else {
        let seconds = new Date().getTime() / 1000;

        Object.assign(tokenPersist, {
          access_token: body.access_token,
          token_type: body.token_type,
          expires_in: body.expires_in,
          created_at: seconds
        });

        resolve();
      }
    }
  });
};

let executeHttp = exports.executeHttp = function executeHttp(httpMethod, path, data) {
  return new promise((resolve, reject) => {
    let httpOptions = {};

    if(!('access_token' in tokenPersist) && utils.hasTokenExpired(tokenPersist)) {
      generateToken()
        .then(() => {
          invoke();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      invoke();
    }

    function invoke() {
      Object.assign(httpOptions, config.defaultOptions, tokenPersist);
      client.invoke(httpMethod, path, data, httpOptions, responseHandler);
    }

    function responseHandler(err, res, body) {
      if(err) {
        reject(err);

        return;
      }

      resolve(body);
    }
  });
};
