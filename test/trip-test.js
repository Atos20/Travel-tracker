import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/trip.js';
import testData from '../test-data/sample-data.js';


let tripObj, newTrip;

describe('Trip', () => {
  beforeEach(() => {
    tripObj = testData.tripsSampleData.trips[0]
    newTrip = new Trip(tripObj);
  });
  it.skip('Should be able to be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it.skip('Should be able to be an instance of DestinationsRepo class', () => {
    expect(newTrip).to.be.an.instanceOf(Trip);
  });

  it.skip('Should be able to have an id', () => {
    expect(newTrip).to.have.a.property('id');
    expect(newTrip.id).to.equal(1);
  });

  it.skip('Should be able to have a userID as property', () => {
    expect(newTrip).to.have.a.property('userID');
    expect(newTrip.userID).to.equal(1);
  });

  it.skip('Should be able to have a destinationID as property', () => {
    expect(newTrip).to.have.a.property('destinationID');
    expect(newTrip.destinationID).to.equal(1);
  });

  it.skip('Should be able to have a travelers as property', () => {
    expect(newTrip).to.have.a.property('travelers');
    expect(newTrip.travelers).to.equal(5);
  });

  it.skip('Should be able to have a date as property', () => {
    expect(newTrip).to.have.a.property('date');
    expect(newTrip.date).to.equal('2019/09/16');
  });

  it.skip('Should be able to have a duration as property', () => {
    expect(newTrip).to.have.a.property('duration');
    expect(newTrip.duration).to.equal(8);
  });

  it.skip('Should be able to have a status as property', () => {
    expect(newTrip).to.have.a.property('status');
    expect(newTrip.status).to.equal('approved');
  });

  it.skip('Should be able to have a suggestedActivities as property', () => {
    expect(newTrip).to.have.a.property('suggestedActivities');
    expect(newTrip.suggestedActivities.length).to.equal(0);
  });
});  
