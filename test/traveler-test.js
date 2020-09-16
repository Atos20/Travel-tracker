import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/traveler.js';
import testData from '../test-data/sample-data.js'
let traveler, userData1;

describe('Traveler', () => {
  beforeEach(() => {
    userData1 = testData.userSampleData.travelers[0]
    traveler = new Traveler(userData1);
    // console.log(traveler)
  });
  it('Should be able to be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('Should be an instance of User', () => {
    expect(traveler).to.be.an.instanceof(Traveler);
  });

  it('Should be able to have an id', () => {
      expect(traveler.id).to.equal(1)
  });
  it('should be able to have a name', () => {
      expect(traveler.name).to.equal('Rosalind Hite')
  })

});