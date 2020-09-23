import chai from 'chai';
const expect = chai.expect;

import DestinationsRepo from '../src/destinationsRepo.js';
import testData from '../test-data/sample-data.js'

let sampleData, newDestinationsRepo;

describe('DestinationsRepo', () => {
  beforeEach(() => {
    sampleData = testData.destinationsSampleData
  
    newDestinationsRepo = new DestinationsRepo(sampleData);

  });

  it('Should be able to be a function', () => {
    expect(DestinationsRepo).to.be.a('function');
  });

  it('Should be able to be an instance of DestinationsRepo class', () => {
    expect(newDestinationsRepo).to.be.an.instanceOf(DestinationsRepo);
  });

  it('Should be able to hold onto all destinations data', () => {
    expect(newDestinationsRepo).to.have.a.property('destinationsData');
    expect(newDestinationsRepo.destinationsData.destinations.length).to.equal(15);
  })

  it('Should be able to get destinations by id or name', () => {
    const destination = newDestinationsRepo.getDestinationBy('id', 1);
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

  it('Should be able to calculate the cost of each destination for any given amount of days and people', () => {
    const costPerDestination = newDestinationsRepo.getDestinationCost(1, 10, 2);
    expect(costPerDestination).to.be.equal(1500);
  });

  it('Should be able to calculate the cost of each destination for any given amount of days and people', () => {
    const costPerDestination = newDestinationsRepo.getDestinationCost(2, 10, 2);
    expect(costPerDestination).to.be.equal(2560);
  });
});
