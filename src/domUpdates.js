import moment from 'moment';

const domUpdates = {
  // displayEstimatedCost(estimate){
  //   const newTripForm = document.querySelector('.new-trip-form');
  //   console.log(estimate)
  // },

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
    newTripForm.classList.remove('hidden');
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