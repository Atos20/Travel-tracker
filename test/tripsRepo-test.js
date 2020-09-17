import chai from 'chai';
const expect = chai.expect;

import TripsRepo from '../src/TripsRepo.js';
import testData from '../test-data/sample-data.js'
import Traveler from '../src/traveler.js';

let tripsData, newTripsRepo, newTraveler, travelerData;

describe('TripsRepo', () => {
  beforeEach(() => {
    travelerData = testData.travelersSampleData.travelers[0]
    tripsData = testData.tripsSampleData
    newTraveler = new Traveler(travelerData)
    newTripsRepo = new TripsRepo(tripsData, newTraveler.id);
  });
  it.skip('Should be able to be a function', () => {
    expect(TripsRepo).to.be.a('function');
  });

  it.skip('Should be able to be an instance of TripsRepo class', () => {
    expect(newTripsRepo).to.be.an.instanceOf(TripsRepo);
  });

  it.skip('Should be able to filter trips by id number', () =>{
    expect(newTripsRepo.historyByUserId(newTraveler.id).length).to.eql(5)
  });
});  