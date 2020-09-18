class DestinationsRepo {
    constructor(destinationsData) {
      this.destinationsData = destinationsData.destinations;
    }

    //get destinations by id
    getDestinationById(id) {
      const destination = this.destinationsData.find( destination => destination.id === id);
      console.log(destination)
      return destination
    }

    // get destination cost
    

  }

  export default DestinationsRepo ;