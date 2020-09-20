const domUpdates = {

  displayAllDestinations(destinations){
    const allDestinationsContainer = document.querySelector('.card-container');
    const allDestinations = destinations.destinationsData.destinations;
    console.log(allDestinations)
    allDestinationsContainer.innerHTML = ''
    allDestinations.forEach(destination => {
      allDestinationsContainer.innerHTML +=`
      <div class= "travel-card">
        <img class="dest-img"src=" ${destination.image}" alt="${destination.alt}">

        <div class="single-card-container">

          <div class="destination-name">
            <h1 class="info ${destination.destination}">"Stockholm, Sweden"</h1>
          </div>

          <div class="cost-per-day">
            <h2 class="info title-per-Day"> Cost per Day</h2>
            <h2 class="info amount-per-Day">${destination.estimatedLodgingCostPerDay}</h2>
          </div>
          
          <div class="flight-per-person">
            <h2 class="info title-cost-per-Person"> Flight person</h2>
            <h2 class="info amount-per-Person">${destination.estimatedFlightCostPerPerson}</h2>
          </div>

        </div>

      </div>
      `
    })
  },

  displayNewTripFeedBack(value, estimate){
    console.log(estimate)
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
    totalSpent.innerText = `You have spent $${traveler.spentOverYearPlusFees}.00 this Year`;
  }


}

export default domUpdates;