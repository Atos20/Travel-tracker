import chai from 'chai';
const expect = chai.expect;

import User from '../src/user.js';
import testData from '../test-data/sample-data.js'

let user, user2, userData1, userData2;

describe('User', () => {
  beforeEach(() => {
    user = new User({
        id: 1,
        name: 'me'
    });
  });
  it('Should be able to be a function', () => {
      expect(User).to.be.a('function');
  });

  it('Should be an instance of User', () => {
      expect(user).to.be.an.instanceof(User);
  });

  it('Should be able to have an id', () => {
      expect(user.id).to.equal(1)
  });

  it('Should be able to have a name', () => {
      expect(user.name).to.equal('me')
  });

});