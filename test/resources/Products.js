'use strict';

import test from 'ava';
import products from './../../lib/resources/Products';
import api from './../../lib/api';
import {stub, match} from 'sinon';

test.beforeEach(t => {
  t.context.executeHttpStub = stub(api, 'executeHttp').returns({ panda: 'true' });
});

test.afterEach(t => {
  t.context.executeHttpStub.restore();
});

test('correct http method and endpoint', t => {
  products();

  t.true(t.context.executeHttpStub.calledWith('GET', '/v1/products/'));
});
