// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import animations from './animations.js';

import Traveler from '../src/traveler.js';
import testData from '../test-data/sample-data.js'
import TripsRepo from '../src/tripsRepo.js';
import TravelerRepo from '../src/travelerRepo.js';
import DestinationsRepo from '../src/destinationsRepo.js';

const mainMenu = document.querySelector('.hamburger');
mainMenu.addEventListener('click', animations.animateBurgerMenu);












