import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/traveler.js';
import testData from '../test-data/sample-data.js'
import TripsRepo from '../src/tripsRepo.js';
import TravelerRepo from '../src/travelerRepo.js';
let traveler, travelerData, today, tripRepo, travelerRepo, tripsDataSample;

describe('Traveler', () => {
  beforeEach(() => {
    today = "2019/09/16";
    travelerData = testData.travelersSampleData.travelers[0]
    tripsDataSample = testData.tripsSampleData
    tripRepo = new TripsRepo(tripsDataSample)
    travelerRepo = new TravelerRepo(tripRepo.historyByUserId(1));
    traveler = new Traveler(travelerData, travelerRepo)
  });

  it.skip('Should be able to be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it.skip('Should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceof(Traveler);
  });

  it.skip('Should be able to have an id', () => {
      expect(traveler.id).to.equal(1);
  });

  it.skip('should be able to have a name', () => {
      expect(traveler.name).to.equal('Rosalind Hite');
  });

  it.skip('Should be able to know about it\'s travel history', () => {
    expect(traveler).to.have.a.property('travelHistory')
    expect(traveler.travelHistory.length).to.equal(5);
  });

  it.only('Should be able to keep track of the all thre trips taken so far', () => {
    // travelergetTripHistory()
  });

  it.skip('Should be able to know what is the current trip if any', () => {

  });

  it.skip('Should be able to keep track of the future trips', () => {

  });

  it.skip('Should be able to keep track of pending trips', () => {

  });

  it.skip('Should be able to kknow how much the traveler has spent over the year', () => {

  });
});