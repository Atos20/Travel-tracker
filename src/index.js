
import './css/base.scss';
import './images/turing-logo.png'
import animations from './animations.js';

import Agent from '../src/agent.js';
import Traveler from '../src/traveler.js';
import TripsRepo from '../src/tripsRepo.js';
import TravelersRepo from '../src/travelerRepo.js';
import DestinationsRepo from '../src/destinationsRepo.js';
import FecthHandler from '../src/fetchHandler.js'
import domUpdates from '../src/DomUpdates.js';

let tripsRepo, destinationsRepo, travelersRepo, traveler, agent;

const mainMenu = document.querySelector('.hamburger');
const newTripButton = document.querySelector('#world-globe');
const submitNewTripButton  = document.querySelector('.submit');

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
    domUpdates.greetTraveler(traveler)
    // console.log(traveler)
  })
}

submitNewTripButton.addEventListener('click', domUpdates.submitNewTrip)
newTripButton.addEventListener('click', domUpdates.toggleNewTripForm);
mainMenu.addEventListener('click', animations.animateBurgerMenu);
mainMenu.addEventListener('click', domUpdates.displayMenuOptions);

window.onload = onStart()
