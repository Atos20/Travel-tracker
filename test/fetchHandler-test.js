import chai from 'chai';
import spies from 'chai-spies';
import { expect } from 'chai';
chai.use(spies)

import FecthHandler from '../src/fetchHandler.js'
let newFetch, query

describe('fetchHandler', () => {
  beforeEach(() => {

    global.fetch = {}
    chai.spy.on(fetch, '', () => {})
    newFetch = new FecthHandler()
    query = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/'
  });
  afterEach(() => {
    chai.spy.restore(newFetch);
  });

  it('Should be a function', () => {
      expect(FecthHandler).to.be.a('function')
  });

  it('Should be able to have a query string by default', () => {
      expect(newFetch).to.have.a.property('URL');
      expect(newFetch.URL).to.equal(query)
  });

  it.skip('Should be able to Get all travelers data', () => {
    newFetch.getAllTravelersData()
    expect(newFetch.getAllTravelersData).to.have.been.called(1);
    expect(newFetch.getAllTravelersData).to.have.been.called.with();
  });
  
  it.skip('Should be able to Get a single traveler data', () => {
    newFetch. getSingleTravelerData()
    expect(newFetch.getSingleTravelerData).to.have.been.called(1);
    expect(newFetch.getSingleTravelerData).to.have.been.called.with();
  });

  it.skip('Should be able to Get all trips data', () => {
    newFetch.getAllTripsData()
    expect(newFetch.getAllTripsData).to.have.been.called(1);
    expect(newFetch.getAllTripsData).to.have.been.called.with();
  });

  it.skip('Should be able to Get all destinations', () => {
    newFetch.getAllDestinationsData()
    expect(newFetch.getAllDestinationsData).to.have.been.called(1);
    expect(newFetch.getAllDestinationsData).to.have.been.called.with();
  });

  it.skip('Should be able to Add a new trip', () => {
    expect(newFetch.addNewTrip()).to.equal([])
  });

  it.skip('Should be able to Add new destination', () => {
    newFetch.addNewDestination()
    expect(newFetch.addNewDestination).to.have.been.called(1);
    expect(newFetch.addNewDestination).to.have.been.called.with();
  });

  it.skip('Should be able to Modify a single trip', () => {
    newFetch.modifySingleTrip()
    expect(newFetch.modifySingleTrip).to.have.been.called(1);
    expect(newFetch.modifySingleTrip).to.have.been.called.with();
  });

  it('Should be able to Delete a single trip', () => {
    newFetch.deletTrip()
    expect(newFetch.deletTrip).to.have.been.called(1);
    // expect(newFetch.deletTrip).to.have.been.called.with();
  });
});