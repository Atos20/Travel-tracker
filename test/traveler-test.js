import chai from 'chai';
const expect = chai.expect;

import moment from 'moment';
import Traveler from '../src/traveler.js';
import testData from '../test-data/sample-data.js'
import TripsRepo from '../src/tripsRepo.js';
import TravelerRepo from '../src/travelerRepo.js';
let traveler, travelerData, today, tripRepo, travelerRepo, tripsDataSample;

describe('Traveler', () => {
  beforeEach(() => {
    today = moment().format("YYYY/MM/DD");
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
    const restructureData = traveler.restructuredTripHistoryByDate();
    expect(traveler.travelHistory.length).to.equal(5);
    expect(restructureData[0]['2020/10/04'].date).to.eql('2020/10/04')
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

/*
[
  {
    id: 1,
    userID: 1,
    destinationID: 1,
    travelers: 5,
    date: '2019/09/16',
    duration: 8,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 2,
    userID: 1,
    destinationID: 2,
    travelers: 5,
    date: '2020/10/04',
    duration: 18,
    status: 'pending',
    suggestedActivities: []
  },
  {
    id: 3,
    userID: 1,
    destinationID: 3,
    travelers: 4,
    date: '2020/05/22',
    duration: 17,
    status: 'pending',
    suggestedActivities: []
  },
  {
    id: 4,
    userID: 1,
    destinationID: 4,
    travelers: 2,
    date: '2020/02/25',
    duration: 10,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 5,
    userID: 1,
    destinationID: 5,
    travelers: 3,
    date: '2021/10/30',
    duration: 18,
    status: 'approved',
    suggestedActivities: []
  }
]
*/