import chai from 'chai';
const expect = chai.expect;

import User from '../src/user.js';
import testData from '../test-data/sample-data.js'

let user, user2, userData1, userData2;

describe('User', () => {
  beforeEach(() => {
    userData1 = testData.userSampleData.travelers[0]
    userData2 = testData.userSampleData.travelers[1]
    user = new User(userData1);
    user2 = new User(userData2);
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

  it('Should be able to have an different id', () => {
      expect(user2.id).to.equal(2)
});


});