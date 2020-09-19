class FecthHandler {
  constructor(name) {
    this.URL = `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/`
  }
  
  //Get all travelers
  //https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers
  //GET
   //require properties => none
  getAllTravelersData() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${this.URL}travelers/travelers`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  //Get single traveler
  //https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/<id> where<id> will be a number of a traveler’s id
  //GET
  //require properties => none
  getSingleTravelerData(id){

  }

  //Get all trips
  //https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips
  //GET
   //require properties => none
  getAllTripsData() {

  }

  //Get all destinations
  //https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations
  //GET
  //require properties => none
  getAllDestinationsData() {

  }

  //Add new trip
  //https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips
  //POST
  /*
  //require properties
  {id: <number>,
     userID: <number>, 
     destinationID: <number>, 
     travelers: <number>, 
     date: <string 'YYYY/MM/DD'>, 
     duration: <number>, 
     status: <string 'approved' or 'pending'>, 
     suggestedActivities: <array of strings>
    }
    //Sample Successful Response👇🏽
    {message: 'Resource with id <id> successfully posted', 
    newResource: <Object with trip info just posted>
   }
  */
   addNewTrip(){

   }

  //Add new destination
  //https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations
  //POST
  /*
  //require properties
  {
      id: <number>, 
      destination: <string>, 
      estimatedLodgingCostPerDay: <number>, 
      estimatedFlightCostPerPerson: <number>, i
      mage: <string>, alt: <string>
    }
  */
  /*
  //Sample Successful Response👇🏽
  {message: 'Resource with id <id> successfully posted', 
  newResource: <Object with destination info just posted>
  }*/
  addNewDestination() {

  }

  //Modify single trip
  //https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip
  //POST
  /*
  //require properties
  {
    id: <number>, 
    status:<String of 'approved' or 'pending', 
    suggestedActivities: <Array of strings>} Only a status or a suggestedActivities property is required for a successful request
  }
  //Sample Successful Response👇🏽
  {message: 'Trip #<id> has been modified', 
  updatedResource: <Object with newly updated data>}
  */
  modifySingleTrip(){

  }

  //   Delete single trip
  // https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips
  //DELETE
  //{id: <Number>}
  //Sample Successful Response👇🏽
  //Trip # has been deleted
  deletTrip(){
  }
}
    
    export default FecthHandler; 