import chai from 'chai';
const expect = chai.expect;

import DestinationsRepo from '../src/destinationsRepo.js';
import testData from '../test-data/sample-data.js'

let destinationsSampleData, newDestinationsRepo;

describe('DestinationsRepo', () => {
  beforeEach(() => {
    destinationsSampleData = testData.destinationsSampleData
    newDestinationsRepo = new DestinationsRepo(destinationsSampleData);
    // console.log(destinationsData)
  });
  it.skip('Should be able to be a function', () => {
    expect(DestinationsRepo).to.be.a('function');
  });

  it.skip('Should be able to be an instance of DestinationsRepo class', () => {
    expect(newDestinationsRepo).to.be.an.instanceOf(DestinationsRepo);
  });

  it.only('Should be able to get destinations by id or name', () => {
    const destination = newDestinationsRepo.getDestinationBy('id', 1)
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

  it.skip('Should be able to calculate the cost of each destination for any given amount of days and people', () => {
    const costPerDestination = newDestinationsRepo.getDestinationCost(1, 10, 2);
    expect(costPerDestination).to.be.equal(1500);
  });

  it.skip('Should be able to calculate the cost of each destination for any given amount of days and people', () => {
    const costPerDestination = newDestinationsRepo.getDestinationCost(2, 10, 2);
    expect(costPerDestination).to.be.equal(2560);
  });
});

/*
[
  {
  id: 1,
  destination: 'Lima, Peru',
  estimatedLodgingCostPerDay: 70,
  estimatedFlightCostPerPerson: 400,
  image: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
  alt: 'overview of city buildings with a clear sky'
}
{
    "id": 2,
    "destination": "Stockholm, Sweden",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 780,
    "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with boats on the water during the day time"
    }
  ]
*/