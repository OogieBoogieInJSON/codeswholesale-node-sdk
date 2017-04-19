'use strict';

import test from 'ava';
import account from './../../lib/resources/Account';
import api from './../../lib/api';
import {stub} from 'sinon';

test.beforeEach(t => {
  t.context.executeHttpStub = stub(api, 'executeHttp').returns({ panda: 'true' });
});

test('correct http method and endpoint', t => {
  account();

  t.true(t.context.executeHttpStub.calledWith('GET', '/v1/accounts/current/'));
});
