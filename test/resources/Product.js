'use strict';

import test from 'ava';
import product from './../../lib/resources/Product';
import api from './../../lib/api';
import {stub, match} from 'sinon';

test.beforeEach(t => {
  t.context.executeHttpStub = stub(api, 'executeHttp').returns({ panda: 'true' });
});

test.afterEach(t => {
  t.context.executeHttpStub.restore();
});

test('correct http method and endpoint', t => {
  product(123);

  t.true(t.context.executeHttpStub.calledWith('GET', '/v1/products/123'));
});
