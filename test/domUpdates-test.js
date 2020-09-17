import chai from 'chai';
import spies from 'chai-spies';
import { expect } from 'chai';
import DomUpdates from '../src/DomUpdates.js';
import sampleData from '../test-data/sample-data.js';
import User from '../src/user.js';
chai.use(spies)

import domUpdates from '../src/domUpdates.js'
let DOM

describe('fetchHandler', () => {
  beforeEach(() => {
    DOM = domUpdates
    global.document = {};
    event = {};
    chai.spy.on(document, 'querySelector', () => {});
    chai.spy.on(domUpdates, 'populateCards', () => {})
  });
  afterEach(() => {
    chai.spy.restore(DOM);
  });
});