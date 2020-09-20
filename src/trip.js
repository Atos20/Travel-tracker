//should be able to create trips
class Trip {
  constructor(tripObj) {
    this.tripId = Date.now();
    this.userID = tripObj.userID;
    this.destinationID = tripObj.destinationID;
    this.travelers = tripObj.travelers || 1;
    this.tripDate = tripObj.tripDate ;
    this.tripDuration = tripObj.tripDuration; 
    this.status = tripObj.status || 'pending';
    this.suggestedActivities = tripObj.suggestedActivities || [];
  }

  suggestActivities(activity) {
    this.suggestedActivities.push(activity)
  }
}
  
  export default Trip; 