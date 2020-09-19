import chai from 'chai';
const expect = chai.expect;


import Traveler from '../src/traveler.js';
import testData from '../test-data/sample-data.js'
import TripsRepo from '../src/tripsRepo.js';
import TravelersRepo from '../src/travelerRepo.js';

let tripsData, tripRepo, traveler, travelerData, tripsDataSample, travelerRepo;
//intantiate the destinations repo that contains all the information about destinations, inside
//destination there ia a methods that retireves 
describe('TravelerRepo', () => {
  beforeEach(() => {
    travelerData = testData.travelersSampleData.travelers[0]
    tripsData = testData.tripsSampleData
    tripsDataSample = testData.tripsSampleData
    tripRepo = new TripsRepo(tripsDataSample)
    travelerRepo = new TravelerRepo(tripRepo.historyByUserId(1));
    traveler = new Traveler(travelerData, travelerRepo)
  });
  it.skip('Should be able to be a function', () => {
    expect(TravelerRepo).to.be.a('function');
  });

  it.skip('Should be able to be an instance of TravelerRepo class', () => {
    expect(travelerRepo).to.be.an.instanceOf(TravelerRepo);
  });

  // it('Should be able to filter trips by id number', () =>{
  //   expect(travelerRepo.userTripHistory.length).to.eql(5)
  // });

});  