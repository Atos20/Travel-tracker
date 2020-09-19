class FecthHandler {
  constructor(name) {
    this.root = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/'
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
  }
  
  //Get all travelers
  //https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers
  //GET
   //require properties => none
  static getAllTravelersData() {
    const promise = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers`, this.requestOptions)
      .then(response => response.json())
      // .then(result => console.log(result))
      .catch(error => console.log('error', error));
    return promise;
  }

  //Get all destinations
  //https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations
  //GET
  //require properties => none
  
  static getAllDestinationsData() { 
    const promise = fetch("https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations", this.requestOptions)
    .then(response => response.json())
    // .then(result => console.log(result))
    .catch(error => console.log('error', error));
    return promise
  }
  
  //Get all trips
  //https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips
  //GET
  //require properties => none
  static getAllTripsData() {
    const promise = fetch("https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips", this.requestOptions)
      .then(response => response.json())
      // .then(result => console.log(result))
      .catch(error => console.log('error', error));
    return promise
  }
  
  //Get single traveler
  //https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/<id> where<id> will be a number of a traveler’s id
  //GET
  //require properties => none
  static getSingleTravelerData(userId){
    const promise = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${userId}`, this.requestOptions)
      .then(response => response.json())
      // .then(result => console.log(result))
      .catch(error => console.log('error', error));
    return promise
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
  static addNewTrip(){

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
  static addNewDestination() {

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