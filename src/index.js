
import './css/base.scss';
import './images/turing-logo.png'
import moment from 'moment';

import animations from './animations.js';
import Agent from '../src/agent.js';
import Traveler from '../src/traveler.js';
import TripsRepo from '../src/tripsRepo.js';
import TravelersRepo from '../src/travelerRepo.js';
import DestinationsRepo from '../src/destinationsRepo.js';
import FecthHandler from '../src/fetchHandler.js'
import domUpdates from '../src/DomUpdates.js';
import Trip from './trip';

let tripsRepo, destinationsRepo, travelersRepo, traveler, agent, newTrip;

const mainMenu = document.querySelector('.hamburger');
const newTripButton = document.querySelector('#world-globe');
const submitNewTripButton  = document.querySelector('.submit');

const submitNewTrip = (event) => {
  const pickedDestination = document.querySelector('.destination-chosen');
  const amountOfPeople = document.querySelector('.input1');
  const date = document.querySelector('.input2');
  const duration = document.querySelector('.input3');
  event.preventDefault();
  const userID = traveler.id;
  const tripName = pickedDestination.value;
  const travelers = amountOfPeople.value;
  const tripDate = moment(date.value).format('YYYY/MM/DD');
  const tripDuration = duration.value;
  const destinationInfo = destinationsRepo.getDestinationBy('destination', tripName);
  const destinationID = destinationInfo.id;
  const desiredTrip = new Trip({userID, destinationID, travelers, tripDate , tripDuration});
  //call for the function that will remove the form and display a message
  //invoke the function that will POST the fetch request
}

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
    // domUpdates.displayDestinations(destinationsRepo);
  })
}

submitNewTripButton.addEventListener('click', submitNewTrip)
newTripButton.addEventListener('click', domUpdates.toggleNewTripForm);
mainMenu.addEventListener('click', animations.animateBurgerMenu);
mainMenu.addEventListener('click', domUpdates.displayMenuOptions);

window.onload = onStart()
