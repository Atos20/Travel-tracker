
//helper class that will be able to calculate the cost of the trip
//it will be able to find destinations by 
import chai from 'chai';
const expect = chai.expect;

import DestinationsRepo from '../src/destinationsRepo.js';
import testData from '../test-data/sample-data.js'

let destinations, newDestinationsRepo;

describe('DestinationsRepo', () => {
  beforeEach(() => {
    destinations = testData.destinationsSampleData
    newDestinationsRepo = new DestinationsRepo(destinations);
    // console.log(destinationsData)
  });
  it.skip('Should be able to be a function', () => {
    expect(DestinationsRepo).to.be.a('function');
  });

  it.skip('Should be able to be an instance of DestinationsRepo class', () => {
    expect(newDestinationsRepo).to.be.an.instanceOf(DestinationsRepo);
  });

  it.only('Should be able to get destinations by', () => {
    const destination = newDestinationsRepo.getDestinationById(1)
    expect(destination).to.eql(
      {
        "id": 1,
        "destination": "Lima, Peru",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 400,
        "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "alt": "overview of city buildings with a clear sky"
        }
    );
  });
});