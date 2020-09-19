// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Agent from '../src/agent.js';
import Traveler from '../src/traveler.js';
import TripsRepo from '../src/tripsRepo.js';
import TravelersRepo from '../src/travelerRepo.js';
import DestinationsRepo from '../src/destinationsRepo.js';
import FecthHandler from '../src/fetchHandler.js'
import DomUpdates from '../src/DomUpdates.js';

let tripsRepo, destinationsRepo, travelersRepo, traveler, agent;


const onStart = () => {
  let userId = (Math.floor(Math.random() * 49) + 1)
  const allTripsData = FecthHandler.getAllTripsData();
  const allDestinationsData = FecthHandler.getAllDestinationsData();
  const allTravelersData = FecthHandler.getAllTravelersData();
  const travelerData = FecthHandler.getSingleTravelerData(userId);

  Promise.all([allTripsData, allDestinationsData, allTravelersData, travelerData])
  .then(values => {
    tripsRepo = new TripsRepo(values[0]);
    destinationsRepo = new DestinationsRepo(values[1]);
    travelersRepo = new TravelersRepo(tripsRepo.historyByUserId(values[3].id));
    traveler = new Traveler(values[3], travelersRepo, destinationsRepo.destinationsData);
    console.log(traveler)
  })
}




window.onload = onStart()
