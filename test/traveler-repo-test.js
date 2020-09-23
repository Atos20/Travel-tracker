import chai from 'chai';
const expect = chai.expect;

import testData from '../test-data/sample-data.js'
import TripsRepo from '../src/tripsRepo.js';
import TravelersRepo from '../src/travelerRepo.js';

let tripRepo, tripsDataSample, travelersRepo;

describe('TravelersRepo', () => {
  beforeEach(() => {
    tripsDataSample = testData.tripsSampleData
    tripRepo = new TripsRepo(tripsDataSample)
    travelersRepo = new TravelersRepo(tripRepo.historyByUserId(1));

  });
  it('Should be able to be a function', () => {
    expect(TravelersRepo).to.be.a('function');
  });

  it('Should be able to be an instance of TravelersRepo class', () => {
    expect(travelersRepo).to.be.an.instanceOf(TravelersRepo);
  });
});  