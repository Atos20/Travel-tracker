import DestinationsRepo from '../src/destinationsRepo.js';

const domUpdates = {


  displayBurgerMenu(burger){
    burger.innerHTML =`
      <span class="hamburger-line line-1"></span>
      <span class="hamburger-line line-2"></span>
      <span class="hamburger-line line-3"></span>
    `
  },

  displaySalutation() {
    const welcome = document.querySelector('.salutation')
    welcome.innerHTML = `
    <section class="salutation">
      <h1 class="welcome"></h1>
      <h2 class="total-spent"></h2>
    </section>

    `
  },

  displayTravelesHistory(tripsList, tripHistory, status){
    const repo = new DestinationsRepo({destinations : tripsList})
    const mergedData = tripHistory.map(trip => {
      const cost = repo.getDestinationCost(trip.destinationID, trip.duration, trip.travelers)
      const data = {destinationName: '',date : trip.date, travelerCount: trip.travelers, duration: trip.duration, destinationID: trip. destinationID, status : trip.status, amount: cost }
      tripsList.forEach(entry =>  data.destinationID === entry.id ? data.destinationName = entry.destination : false);
      return data
    })
    const tripStatus = document.querySelector('.trip-status');
    const allTripsByUser = document.querySelector('.trips-of-trips');
    if(tripsList.length === 0){
      tripStatus.innerText = status
      allTripsByUser.innerHTML = `
          <div class="traveler-trip">
            <h1 class="trip-name">no trips found</h1>
            <h2 class="poop-icon"><i class="fas fa-poop"></i></h2>
          </div>
        `
    } else {
      allTripsByUser.innerHTML = '';
      tripStatus.innerText = status
      mergedData.forEach(trip => {
          allTripsByUser.innerHTML += `
          <div class="traveler-trip">
          <h1 class="trip-name">${trip.destinationName} </h1>
          <h2 class="trip-date">${trip.date}</h2>
          <h3 class="trip-traveler-count">Travel count ${trip.travelerCount}</h3>
          <h2 class="trip-duration1">duration</h2>
          <h2 class="trip-duration2">${trip.duration} days</h2>
          <h4 class="trip-status1">${trip.status}</h4>
          <h2 class="trip-cost1">trip cost</h2>
          <h3 class="trip-cost1">$${trip.amount}</h3>
          </div>
          `
      })
    }
  },


  displayAllDestinations(destinations){
    const allDestinationsContainer = document.querySelector('.card-container');
    const allDestinations = destinations.destinationsData.destinations;
    allDestinationsContainer.innerHTML = ''
    allDestinations.forEach(destination => {
      allDestinationsContainer.innerHTML +=`
      <div class= "travel-card">
        <img class="dest-img"src=" ${destination.image}" alt="${destination.alt}">
        <div class="single-card-container">
          <div class="destination-name">
            <h1 class="destination-title">${destination.destination}</h1>
          </div>
          <div class="cost-per-day">
            <h2 class="info title-per-Day"> Cost per Day</h2>
            <h2 class="info amount-per-Day">$${destination.estimatedLodgingCostPerDay}.00</h2>
          </div>
          <div class="flight-per-person">
            <h2 class="info title-cost-per-Person"> Flight person</h2>
            <h2 class="info amount-per-Person">$${destination.estimatedFlightCostPerPerson}.00</h2>
          </div>
        </div>
      </div>
      `
    })
  },

  displayNewTripFeedBack(value, estimate){
    const newTripForm = document.querySelector('.new-trip-form');
    const feedback = value.message
    const id = feedback .split(' ')[3];
    const status = feedback.split(' ')[4] + ' ' + feedback.split(' ')[5];
    const newMessage = `Congratulations, your trip request has
    been ${status}, here is your confirmation number, ${id}`
    const estimatedCost = `Your estimated cost is $${estimate}USD`
    newTripForm.innerHTML = `
      <h3 class="feedback">${newMessage}</h3>
      <h3 class="new-cost">${estimatedCost}</h3>
      <h3 class="feedback1">status</h3>
      <h3 class="feedback2">pending...</h3>
    `;
    
  },

  toggleDestinationsCards(){
    const container = document.querySelector('.all-images-container');
    container.classList.toggle('hidden');
  },

  toggleAllTripsSection(){
    const statusSection = document.querySelector('.trip-status');
    const tripsButtons = document.querySelector('.trip-buttons');
    const allTripsContainer = document.querySelector('.trips-of-trips');
    statusSection.classList.toggle('hidden')
    tripsButtons.classList.toggle('hidden')
    allTripsContainer.innerHTML = '';
  },

  toggleNewTripForm(){
    const newTripForm = document.querySelector('.form');
    newTripForm.classList.toggle('hidden');
  },

  displayMenuOptions() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('hidden');
  },

  greetTraveler(traveler) {
    const welcome = document.querySelector('.welcome');
    const totalSpent = document.querySelector('.total-spent');
    welcome.innerText = `Welcome ${traveler.name}!`;
    totalSpent.innerText = `You have spent $${traveler.spentOverYearPlusFees} this Year`;
  }


}

export default domUpdates;