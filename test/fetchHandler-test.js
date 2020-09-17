import chai from 'chai';
import spies from 'chai-spies';
import { expect } from 'chai';
chai.use(spies)

import FecthHandler from '../src/fetchHandler.js'
import Trip from '../src/trip.js';
import tripsData from '../test-data/sample-data.js';

let newFetch, query;

describe('fetchHandler', () => {
  beforeEach(() => {
    newFetch = new FecthHandler()
    query = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/'
  });

  it('Should be a function', () => {
      expect(FecthHandler).to.be.a('function')
  });

  it('Should be able to have a query string by default', () => {
      expect(newFetch).to.have.a.property('URL');
      expect(newFetch.URL).to.equal(query)
  });

  it.skip('Should be able to Get all travelers data', () => {
    expect(newFetch.getAllTravelersData()).to.equal([])
  });
  
  it.skip('Should be able to Get a single traveler data', () => {
    expect(newFetch.getSingleTravelerData(1)).to.equal([])
  });

  it.skip('Should be able to Get all trips data', () => {
    expect(newFetch.getAllTripsData()).to.equal([])
  });

  it.skip('Should be able to Get all destinations', () => {
    expect(newFetch.getAllDestinationsData()).to.equal([])
  });

  it.skip('Should be able to Add a new trip', () => {
    expect(newFetch.addNewTrip()).to.equal([])
  });

  it.skip('Should be able to Add new destination', () => {
    expect(newFetch.addNewDestination()).to.equal([])
  });

  it.skip('Should be able to Modify a single trip', () => {
    expect(newFetch.modifySingleTrip()).to.equal([])
  });

  it.skip('Should be able to Delete a single trip', () => {
    expect(newFetch.deletTrip()).to.equal([])
  });
});