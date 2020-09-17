
//helper class that will be able to calculate the cost of the trip
//it will be able to find destinations by 
import chai from 'chai';
const expect = chai.expect;

import DestinationsRepo from '../src/destinationsRepo.js';
import testData from '../test-data/sample-data.js'

let destinations, newDestinationsRepo;

describe('DestinationsRepo', () => {
  beforeEach(() => {
    destinations = testData.destinationsSampleData
    newDestinationsRepo = new DestinationsRepo(destinations);
    // console.log(destinationsData)
  });
  it.skip('Should be able to be a function', () => {
    expect(DestinationsRepo).to.be.a('function');
  });

  it.skip('Should be able to be an instance of DestinationsRepo class', () => {
    expect(newDestinationsRepo).to.be.an.instanceOf(DestinationsRepo);
  });
});