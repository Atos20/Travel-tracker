import moment from 'moment';

const domUpdates = {
  displayNewTripFeedBack(){
    const newTripForm = document.querySelector('.new-trip-form');
    const message = 'hola'
    // newTripForm.innerHTML = '';
    newTripForm.innerHTML = `
    <h3 class="feedback">${message}</h3>
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