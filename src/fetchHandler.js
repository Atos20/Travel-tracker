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
    return promise;
  }
  
  getSingleTravelerData(userId) {
    const promise = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${userId}`, this.requestOptions)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
    return promise;
  }
  
  addNewTrip(trip) {
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
    return promise;
  }
}
export default FecthHandler; 