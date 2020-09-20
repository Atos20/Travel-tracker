
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

let api, tripsRepo, destinationsRepo, travelersRepo, traveler, agent, newTrip;

const mainMenu = document.querySelector('.hamburger');
const newTripButton = document.querySelector('#world-globe');
const submitNewTripButton  = document.querySelector('.submit');


const resolveTripRequest = (desiredTrip) => {
  const tripRequested = api.addNewTrip(desiredTrip)
  tripRequested.then(response => response)
  .then(data => data)
  // .then(message => console.log(message))
  .then(message => domUpdates.displayNewTripFeedBack(message))
}

const submitNewTrip = (event) => {
  event.preventDefault();
  // const pickedDestination = document.querySelector('.destination-chosen');
  const amountOfPeople = document.querySelector('.input1');
  const tripDate = document.querySelector('.input2');
  const triplLength = document.querySelector('.input3');
  const userID = traveler.id;
  const tripName = document.querySelector('.destination-chosen').value;
  const travelers = +amountOfPeople.value;
  const date = moment(tripDate.value).format('YYYY/MM/DD');
  const duration = +triplLength.value;
  const destinationInfo = destinationsRepo.getDestinationBy('destination', tripName);
  const destinationID = destinationInfo.id;
  const desiredTrip = new Trip({userID, destinationID, travelers, date , duration});
  resolveTripRequest(desiredTrip)
}

const onStart = () => {
  api = new FecthHandler()
  let userId = (Math.floor(Math.random() * 49) + 1)
  const allTripsData = api.getAllTripsData();
  const allDestinationsData = api.getAllDestinationsData();
  const allTravelersData = api.getAllTravelersData();
  const travelerData = api.getSingleTravelerData(userId);

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
