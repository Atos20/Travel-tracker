import chai from 'chai';
const expect = chai.expect;

import Agent from '../src/agent.js';
import testData from '../test-data/sample-data.js'
import TripsRepo from '../src/tripsRepo.js';
import DestinationsRepo from '../src/destinationsRepo.js';
import TravelersRepo from '../src/travelerRepo.js';

let agent, agentData, tripsRepoData, destinationsRepoData, 
tripRepo, destinationsRepo, travelersRepo, travelersData;

describe('Agent', () => {
  beforeEach(() => {
    travelersData = testData.travelersSampleData;
    agentData = testData.agentsSampleData.agents[0];
    tripsRepoData = testData.tripsSampleData;
    destinationsRepoData = testData.destinationsSampleData;
    travelersRepo = new TravelersRepo(travelersData);
    tripRepo = new TripsRepo(tripsRepoData);
    destinationsRepo = new DestinationsRepo(destinationsRepoData);
    agent = new Agent(agentData, tripRepo, destinationsRepo, travelersRepo);
  });

  it('Should be able to be a function', () => {
     expect(Agent).to.be.a('function');
  });

  it('Should be an instance of Agent', () => {
    expect(agent).to.be.an.instanceof(Agent);
  });

  it('Should be able to have an id', () => {
    expect(agent.agentId).to.equal(1)
  });

  it('should be able to have a name', () => {
    expect(agent.name).to.equal('Juan Perez')
  });

  it('should be able to have a user name to log-in with', () => {
    expect(agent.userName).to.equal('agency')
  });

  it('should be able to have a pwd', () => {
    expect(agent.pwd).to.equal("travel2020")
  });

  it('Should be able to keep track of all pending trips', () => {
    expect(agent.getAllPendingTrips().length).to.eql(4)
    expect(agent.getAllPendingTrips()[0].status).to.equal('pending')
  });

  it('Should be able to resolve pending trips', () => {
    expect(agent.resolvePendingTrips(3, 'approved')).to.eql(
      {
        "id": 3,
        "status": "approved",
        "suggestedActivities": []
      })
  });

  it.only('Should be able to find current year trips', () => {
    expect(agent.allCurrentYearsTrip().length).to.equal(11)
  });

  it.only('Should be able to calculate the total income genertated this year' +
  'this should be 10% of the user trip cost', () => {
    expect(agent.gatherDataToCalculateAnnualIncome().length).to.equal({
      [
        { duration: 5, costPerDay: 70, flightCostPerPerson: 400 },
        { duration: 17, costPerDay: 130, flightCostPerPerson: 950 },
        { duration: 10, costPerDay: 65, flightCostPerPerson: 350 },
        { duration: 9, costPerDay: 70, flightCostPerPerson: 890 },
        { duration: 17, costPerDay: 90, flightCostPerPerson: 450 },
        { duration: 4, costPerDay: 140, flightCostPerPerson: 1000 },
        { duration: 6, costPerDay: 150, flightCostPerPerson: 1200 },
        { duration: 10, costPerDay: 70, flightCostPerPerson: 830 },
        { duration: 6, costPerDay: 40, flightCostPerPerson: 900 },
        { duration: 17, costPerDay: 130, flightCostPerPerson: 950 },
        { duration: 6, costPerDay: 150, flightCostPerPerson: 650 }
      ]
    })
  });
  it('Should be able to keep track of travelers on trips for today’s date ', () => {

  });

  it('Should be able to know how much the traveler has spent over the year', () => {

  });

  it('Should be able to find travelers by any given week date (EXTENSION)', () => {

  });

});

/*
[
  {
    id: 2,
    userID: 1,
    destinationID: 2,
    travelers: 5,
    date: '2019/09/17',
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
    id: 9,
    userID: 2,
    destinationID: 9,
    travelers: 5,
    date: '2019/12/19',
    duration: 19,
    status: 'pending',
    suggestedActivities: []
  },
  {
    id: 10,
    userID: 2,
    destinationID: 10,
    travelers: 6,
    date: '2020/07/23',
    duration: 17,
    status: 'pending',
    suggestedActivities: []
  }
]
*/