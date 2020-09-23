import chai from 'chai';
const expect = chai.expect;

import TripsRepo from '../src/TripsRepo.js';
import testData from '../test-data/sample-data.js'

let tripsData, newTripsRepo;

describe('TripsRepo', () => {
  beforeEach(() => {
    tripsData = testData.tripsSampleData
    newTripsRepo = new TripsRepo(tripsData);
  });
  it('Should be able to be a function', () => {
    expect(TripsRepo).to.be.a('function');
  });

  it('Should be able to be an instance of TripsRepo class', () => {
    expect(newTripsRepo).to.be.an.instanceOf(TripsRepo);
  });
});  