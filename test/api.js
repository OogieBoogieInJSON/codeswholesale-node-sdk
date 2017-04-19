'use strict';

import test from 'ava';
import api from './../lib/api';
import nock from 'nock';
import {defaultOptions} from './../lib/config';

test.before(t => {
  nock(defaultOptions.host).post('/oauth/token').times(3).reply('200', {
    access_token: 'access token',
    token_type: 'token type',
    expires_in: 1,
    created_at: 1
  });

  nock(defaultOptions.host).get('/test').times(3).reply('200', {
    test: 'test'
  });
});

test('`configure` should extend default options', t => {
  let defaultOptions;

  api.configure({
    panda: true
  });

  defaultOptions = require('./../lib/config').defaultOptions;

  t.true(defaultOptions.panda);
});


test('`executeHttp` should return the response body if successful', async t => {
  let invokeArgs = ['GET', '/test'];

  const body = await api.executeHttp(...invokeArgs);
  t.is(body.test, 'test');
});
