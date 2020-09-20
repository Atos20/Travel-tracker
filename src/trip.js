//should be able to create trips
class Trip {
  constructor(tripObj) {
    this.userID = tripObj.userID;
    this.destinationID = tripObj.destinationID;
    this.travelers = tripObj.travelers || 1;
    this.duration = tripObj.duration; 
    this.date = tripObj.date;
    this.status = 'pending';
    this.suggestedActivities = [];
    this.id = Date.now();
  }

  suggestActivities(activity) {
    this.suggestedActivities.push(activity)
  }
}
  
  export default Trip; 

  /*
{id: <number>, 
userID: <number>, 
destinationID: <number>, 
travelers: <number>, 
date: <string 'YYYY/MM/DD'>, 
duration: <number>, 
status: <string 'approved' or 'pending'>, 
suggestedActivities: <array of strings>}
</array>*/