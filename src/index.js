
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

let api, tripsRepo, destinationsRepo, travelersRepo, traveler, agent;

const mainMenu = document.querySelector('.hamburger');
const newTripButton = document.querySelector('#world-globe');
const submitNewTripButton  = document.querySelector('.submit');
const travelHistory = document.querySelector('.trip-buttons')


const retrieveTravalersTrips = (event) => {
  if (event.target.classList.contains('all-trips') || event.target.classList.contains('fa-suitcase')){
    const tripsList = traveler.travelHistory.map(trip =>destinationsRepo.getDestinationBy('id', trip.destinationID));
    domUpdates.displayTravelesHistory(tripsList, traveler.travelHistory, 'all trips');
  }
  if (event.target.classList.contains('past-trips') || event.target.classList.contains('fa-plane-arrival')){
    const tripsList = traveler.tripsHistory.map(trip =>destinationsRepo.getDestinationBy('id', trip.destinationID));
    domUpdates.displayTravelesHistory(tripsList, traveler.tripsHistory, 'past trips');
  }
  if (event.target.classList.contains('current-trips')|| event.target.classList.contains('fa-plane')){
    const tripsList = traveler.currentTrip.map(trip =>destinationsRepo.getDestinationBy('id', trip.destinationID));
    domUpdates.displayTravelesHistory(tripsList, traveler.currentTrip, 'current trips');
  }
  if (event.target.classList.contains('future-trips')|| event.target.classList.contains('fa-plane-departure')){
    const tripsList = traveler.upcomingTrips.map(trip =>destinationsRepo.getDestinationBy('id', trip.destinationID));
    domUpdates.displayTravelesHistory(tripsList, traveler.upcomingTrips, 'upcoming trips');
  }
  if (event.target.classList.contains('pending')|| event.target.classList.contains('fa-spinner')){
    const tripsList = traveler.pendingTrips.map(trip => destinationsRepo.getDestinationBy('id', trip.destinationID));
    domUpdates.displayTravelesHistory(tripsList, traveler.pendingTrips, 'pending trips');
  }
}

const resolveTripRequest = (tripRequested) => {
  const trip = destinationsRepo.getDestinationBy('id', tripRequested.destinationID);
  const estimated = destinationsRepo.getDestinationCost(trip.id, tripRequested.travelers, tripRequested.duration)
  api.addNewTrip(tripRequested)
  .then(response => response)
  .then(data => data)
  .then(message => domUpdates.displayNewTripFeedBack(message, estimated))
}

const submitNewTrip = (event) => {
  event.preventDefault();
  const amountOfPeople = document.querySelector('.people-quantity');
  const tripDate = document.querySelector('.select-date');
  const triplLength = document.querySelector('.day-quantity');
  const userID = traveler.id;
  const tripName = document.querySelector('.destination-chosen').value;
  const travelers = +amountOfPeople.value;
  const date = moment(tripDate.value).format('YYYY/MM/DD');
  const duration = +triplLength.value;
  const destinationInfo = destinationsRepo.getDestinationBy('destination', tripName);
  const destinationID = destinationInfo.id;
  const tripRequested = new Trip({userID, destinationID, travelers, date , duration});
  resolveTripRequest(tripRequested)
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
    domUpdates.displayAllDestinations(destinationsRepo);
  })
}


travelHistory.addEventListener('click', retrieveTravalersTrips)
submitNewTripButton.addEventListener('click', submitNewTrip)
newTripButton.addEventListener('click', domUpdates.toggleNewTripForm);
mainMenu.addEventListener('click', animations.animateBurgerMenu);
mainMenu.addEventListener('click', domUpdates.displayMenuOptions);

window.onload = onStart()
