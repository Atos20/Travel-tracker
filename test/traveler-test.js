import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/traveler.js';
import testData from '../test-data/sample-data.js'
import TripsRepo from '../src/tripsRepo.js';
import TravelersRepo from '../src/travelerRepo.js';
// import DestinationsRepo from '../src/travelerRepo.js';
let traveler, travelerData, tripsRepo, travelersRepo, tripsDataSample, destinationsRepo, destinationsData;

describe('Traveler', () => {
  beforeEach(() => {

    travelerData = testData.travelersSampleData.travelers[0];
    destinationsData = testData.destinationsSampleData;
    tripsDataSample = testData.tripsSampleData;
    // destinationsRepo = new DestinationsRepo(destinationsData);
    tripsRepo = new TripsRepo(tripsDataSample);//all the trips
    travelersRepo = new TravelersRepo(tripsRepo.historyByUserId(1));
    traveler = new Traveler(travelerData, travelersRepo, destinationsData);
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

  it.skip('Should be able to keep track of the all thre trips taken so far', () => {
    const restructureData = traveler.restructuredTripHistoryByDate();
    expect(traveler.travelHistory.length).to.equal(5);
    expect(restructureData['2020/9/20'].date).to.eql('2020/9/20')
  });

  it.skip('Should be able to know what is the current trip if any', () => {
    const currentTrip = traveler.getCurrentTrip();
    expect(currentTrip).to.eql(
      [
        {
          id: 4,
          userID: 1,
          destinationID: 4,
          travelers: 2,
          date: '2020/09/17',
          duration: 10,
          status: 'approved',
          suggestedActivities: []
        }
      ]
    )
  });

  it.skip('Should be able to keep track of the future trips', () => {
    const futureTrips = traveler.getFutureTrips();
    expect(futureTrips.length).to.eql(2)
  });

  it.skip('Should be able to keep track of past trips', () => {
    const pastTrips = traveler.getPastTrips();
    expect(pastTrips.length).to.eql(3)
  });

  it.skip('Should be able to keep track of pending trips', () => {
    const pendingTrips = traveler.getTripsByStatus('pending');
    expect(pendingTrips.length).to.eql(2);
  });

  it.skip('Should be able to keep track of approved trips', () => {
    const pendingTrips = traveler.getTripsByStatus('approved');
    expect(pendingTrips.length).to.eql(3);
  });

  it.skip('Should be able to list all trips from the current year', () => {
    const currentYearTrips = traveler.getTripByYears();
    expect(currentYearTrips.length).to.eql(3);
  });
  it.skip('Should be able to know how much the traveler has spent over the year', () => {
    const spentOverYear = traveler.spentOverTheYear();
    expect(spentOverYear).to.equal(10681)
  });
});

/*
{
    "id": 1,
    "userID": 1,
    "destinationID": 1,
    "travelers": 5,
    "date": "2020/9/20",
    "duration": 5,
    "status": "approved",
    "suggestedActivities": []
    }
*/
