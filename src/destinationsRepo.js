class DestinationsRepo {
    constructor(destinationsData) {
      // console.log(destinationsData)
      this.destinationsData = destinationsData;
    }
    
    // get destinations by id/name
    getDestinationBy(spec, entry) {
      // console.log('what ma i',this.destinationsData.destinations)
      return this.destinationsData.destinations.find(destination => destination[spec] === entry);
    }

    // get destination cost by id, days and people count
    getDestinationCost(tripId, amountDays, amountPeople){
      const trip = new Array(this.getDestinationBy('id', tripId));
      const totalCost = trip.reduce((total, trip) => {
        const totalPerDay = trip.estimatedLodgingCostPerDay * amountDays;
        const totalTripFlight = trip.estimatedFlightCostPerPerson * amountPeople;
        total = totalPerDay + totalTripFlight;
        return total;
      }, 0)
      return  totalCost
    }

  }

  export default DestinationsRepo ;