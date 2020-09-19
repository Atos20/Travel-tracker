// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Agent from '../src/agent.js';
import Traveler from '../src/traveler.js';
import TripsRepo from '../src/tripsRepo.js';
import TravelerRepo from '../src/travelerRepo.js';
import DestinationsRepo from '../src/destinationsRepo.js';
import FecthHandler from '../src/fetchHandler.js'
import DomUpdates from '../src/DomUpdates.js';

const onStart = () => {
  let userId = (Math.floor(Math.random() * 49) + 1)
  const allTravelersData = FecthHandler.getAllTravelersData();
  const allDestinationsData = FecthHandler.getAllDestinationsData();
  const allTripsData = FecthHandler.getAllTripsData();
  const travelerData = FecthHandler.getSingleTravelerData(userId);
  Promise.all([allTravelersData, allDestinationsData, allTripsData, travelerData])
  .then(values => {
    console.log(values)
  })

}



window.onload = onStart()
