import chai from 'chai';
const expect = chai.expect;

import TripsRepo from '../src/TripsRepo.js';
import testData from '../test-data/sample-data.js'

let trips, newTripsRepo;

describe('TripsRepo', () => {
  beforeEach(() => {
    trips = testData.tripsSampleData
    newTripsRepo = new TripsRepo(trips);
    // console.log(destinationsData)
  });
  it('Should be able to be a function', () => {
    expect(TripsRepo).to.be.a('function');
  });

  it('Should be able to be an instance of DestinationsRepo class', () => {
    expect(newTripsRepo).to.be.an.instanceOf(TripsRepo);
  });
});  