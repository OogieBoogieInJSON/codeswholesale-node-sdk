'use strict';

import test from 'ava';
import order from './../../lib/resources/Order';
import api from './../../lib/api';
import {stub, match} from 'sinon';

test.beforeEach(t => {
  t.context.executeHttpStub = stub(api, 'executeHttp').returns({ panda: 'true' });
});

test.afterEach(t => {
  t.context.executeHttpStub.restore();
});

test('correct http method, endpoint and args are passed', t => {
  order(1, 2);

  t.true(t.context.executeHttpStub.calledWith('GET', '/v1/orders/', match({ productId: 1, quantity: 2 })));
});

test('if no quantity is passed, 1 should be the default', t => {
  order(1);

  t.true(t.context.executeHttpStub.calledWith('GET', '/v1/orders/', match({ productId: 1, quantity: 1 })));
});
