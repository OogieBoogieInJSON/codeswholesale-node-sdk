'use strict';

import test from 'ava';
import {defaultOptions} from './../lib/config';

test('host is the production url', t => {
  t.is(defaultOptions.host, 'https://api.codeswholesale.com');
});

test('grant type should be `client_credentials`', t => {
  t.is(defaultOptions.grant_type, 'client_credentials');
});

test('id and secret keys should be null', t => {
  t.is(defaultOptions.client_id, null);
  t.is(defaultOptions.client_secret, null);
});
