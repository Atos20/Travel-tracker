import chai from 'chai';
const expect = chai.expect;


import Traveler from '../src/traveler.js';
import testData from '../test-data/sample-data.js'
import TripsRepo from '../src/tripsRepo.js';
import TravelersRepo from '../src/travelerRepo.js';

let tripsData, tripRepo, traveler, travelerData, tripsDataSample, travelersRepo;

describe('TravelersRepo', () => {
  beforeEach(() => {
    travelerData = testData.travelersSampleData.travelers[0]
    tripsData = testData.tripsSampleData
    tripsDataSample = testData.tripsSampleData
    tripRepo = new TripsRepo(tripsDataSample)
    travelersRepo = new TravelersRepo(tripRepo.historyByUserId(1));
    traveler = new Traveler(travelerData, travelersRepo)
  });
  it('Should be able to be a function', () => {
    expect(TravelersRepo).to.be.a('function');
  });

  it('Should be able to be an instance of TravelerRepo class', () => {
    expect(travelersRepo).to.be.an.instanceOf(TravelerRepo);
  });
});  