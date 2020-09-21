class FecthHandler {
  constructor() {
    this.root = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/'
    this.requestOptions = { method: 'GET', redirect: 'follow' }
  }
  
  getAllTravelersData() {
    const promise = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers`, this.requestOptions)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
    return promise;
  }
  
   getAllDestinationsData() { 
    const promise = fetch("https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations", this.requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
    return promise
  }
 
  getAllTripsData() {
    const promise = fetch("https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips", this.requestOptions)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
    return promise
  }
  
  getSingleTravelerData(userId){
    const promise = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${userId}`, this.requestOptions)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
    return promise
  }
  
  addNewTrip(trip){
    const promise = fetch("https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(trip), 
  })
    .then(response => response.json())
    .then(result => result)
    .catch(error => alert('error', error));
  return promise
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