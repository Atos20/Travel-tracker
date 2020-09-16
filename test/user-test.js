import chai from 'chai';
const expect = chai.expect;

import User from '../src/user.js';

let user;

describe('User', () => {
    beforeEach(() => {
        user = new User();
    });
  it('Should be able to be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });
});