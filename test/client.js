'use strict';

import test from 'ava';
import {invoke} from './../lib/client';
import nock from 'nock';
import {defaultOptions} from './../lib/config';

const httpOptions = {
  token_type: 'token type', 
  access_token: 'access token'
};

test.before(t => {
  nock(defaultOptions.host).get('/test').times(3).reply('200', {
    test: 'test'
  });
});

test.cb('correct url is created', t => {
  let callbackSpy = (err, res, body) => {
    t.is(res.request.uri.href, defaultOptions.host + '/test');
    t.end();
  };
  let invokeArgs = ['GET', '/test', undefined, httpOptions, callbackSpy];

  invoke(...invokeArgs);
});

test.cb('correct auth header is set', t => {
  let callbackSpy = (err, res, body) => {
    t.is(res.request.headers.Authorization, 'token type access token');
    t.end();
  };
  let invokeArgs = ['GET', '/test', undefined, httpOptions, callbackSpy];

  invoke(...invokeArgs);
});

test.cb('request data should be applied', t => {
  let callbackSpy = (err, res, body) => {
    t.is(res.request.body, 'payload=panda');
    t.end();
  };
  let invokeArgs = ['GET', '/test', { payload: 'panda' }, httpOptions, callbackSpy];

  invoke(...invokeArgs);
});
