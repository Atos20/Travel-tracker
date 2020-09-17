import chai from 'chai';
const expect = chai.expect;

import Agent from '../src/agent.js';
import testData from '../test-data/sample-data.js'
let agent, agentData;

describe('Agent', () => {
  beforeEach(() => {
    agentData = testData.agentsSampleData.agents[0]
    agent = new Agent(agentData);
  });

  it('Should be able to be a function', () => {
     expect(Agent).to.be.a('function');
  });

  it('Should be an instance of Agent', () => {
    expect(agent).to.be.an.instanceof(Agent);
  });

  it('Should be able to have an id', () => {
    expect(agent.id).to.equal(1)
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

  it.skip('Should be able to keep trak of all pending trips', () => {

    });

  it.skip('Should be able to calculate the total income genertated this year' +
  'this should be 10% of the user trip cost', () => {

  });

  it.skip('Should be able to keep track of travelers on trips for today’s date ', () => {

  });

  it.skip('Should be able to know how much the traveler has spent over the year', () => {

  });

  it.skip('Should be able to find travelers by any given week date (EXTENSION)', () => {

  });

  it.skip('', () => {

  });
});