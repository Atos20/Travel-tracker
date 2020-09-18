const agentsSampleData = {
  "agents": [
    {
      "id": 1,
      "name": "Juan Perez",
      "userName": "agency",
      "pwd": "travel2020"
      },
      {
      "id": 2,
      "name": "Daniel Galindo",
      "userName": "user2",
      "pwd": "travel2020"
      }
  ]
}

const travelersSampleData = {
    "travelers": [
    {
    "id": 1,
    "name": "Rosalind Hite",
    "travelerType": "relaxer"
    },
    {
    "id": 2,
    "name": "Lance Amundson",
    "travelerType": "thrill-seeker"
    },
    {
    "id": 3,
    "name": "Dalene Mole",
    "travelerType": "shopper"
    },
    {
    "id": 4,
    "name": "Tanika Hollis",
    "travelerType": "photographer"
    },
    {
    "id": 5,
    "name": "Chastity Ramos",
    "travelerType": "thrill-seeker"
    },
    {
    "id": 6,
    "name": "Marge Paras",
    "travelerType": "shopper"
    },
    {
    "id": 7,
    "name": "Ernesto Wallander",
    "travelerType": "relaxer"
    },
    {
    "id": 8,
    "name": "Nicky Stowell",
    "travelerType": "history buff"
    },
    {
    "id": 9,
    "name": "Yevette Poucher",
    "travelerType": "relaxer"
    },
    {
    "id": 10,
    "name": "Jacob Loggins",
    "travelerType": "relaxer"
    }
  ]
}

const tripsSampleData = {
    "trips": [
    {
    "id": 1,
    "userID": 1,
    "destinationID": 1,
    "travelers": 5,
    "date": "2020/9/20",
    "duration": 5,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 2,
    "userID": 1,
    "destinationID": 2,
    "travelers": 5,
    "date": "2019/09/17",
    "duration": 18,
    "status": "pending",
    "suggestedActivities": []
    },
    {
    "id": 3,
    "userID": 1,
    "destinationID": 3,
    "travelers": 4,
    "date": "2020/05/22",
    "duration": 17,
    "status": "pending",
    "suggestedActivities": []
    },
    {
    "id": 4,
    "userID": 1,
    "destinationID": 4,
    "travelers": 2,
    "date": "2020/09/17",
    "duration": 10,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 5,
    "userID": 1,
    "destinationID": 5,
    "travelers": 3,
    "date": "2021/10/30",
    "duration": 18,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 6,
    "userID": 2,
    "destinationID": 6,
    "travelers": 3,
    "date": "2020/06/29",
    "duration": 9,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 7,
    "userID": 2,
    "destinationID": 7,
    "travelers": 5,
    "date": "2021/5/28",
    "duration": 20,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 8,
    "userID": 2,
    "destinationID": 8,
    "travelers": 6,
    "date": "2021/02/07",
    "duration": 4,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 9,
    "userID": 2,
    "destinationID": 9,
    "travelers": 5,
    "date": "2019/12/19",
    "duration": 19,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 10,
    "userID": 2,
    "destinationID": 10,
    "travelers": 6,
    "date": "2020/07/23",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 11,
    "userID": 3,
    "destinationID": 11,
    "travelers": 4,
    "date": "2020/10/14",
    "duration": 4,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 12,
    "userID": 3,
    "destinationID": 12,
    "travelers": 6,
    "date": "2020/10/17",
    "duration": 6,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 13,
    "userID": 3,
    "destinationID": 13,
    "travelers": 1,
    "date": "2021/02/12",
    "duration": 11,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 14,
    "userID": 3,
    "destinationID": 14,
    "travelers": 1,
    "date": "2020/09/24",
    "duration": 10,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 15,
    "userID": 3,
    "destinationID": 15,
    "travelers": 3,
    "date": "2020/07/04",
    "duration": 6,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 16,
    "userID": 4,
    "destinationID": 1,
    "travelers": 1,
    "date": "2019/11/20",
    "duration": 9,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 17,
    "userID": 4,
    "destinationID": 2,
    "travelers": 1,
    "date": "2019/10/30",
    "duration": 20,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 18,
    "userID": 4,
    "destinationID": 3,
    "travelers": 2,
    "date": "2020/09/25",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 19,
    "userID": 4,
    "destinationID": 4,
    "travelers": 4,
    "date": "2019/07/21",
    "duration": 5,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 20,
    "userID": 4,
    "destinationID": 5,
    "travelers": 4,
    "date": "2020/10/05",
    "duration": 6,
    "status": "approved",
    "suggestedActivities": []
    }
  ]
}

const destinationsSampleData = {
    "destinations": [
    {
    "id": 1,
    "destination": "Lima, Peru",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 400,
    "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    "alt": "overview of city buildings with a clear sky"
    },
    {
    "id": 2,
    "destination": "Stockholm, Sweden",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 780,
    "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with boats on the water during the day time"
    },
    {
    "id": 3,
    "destination": "Sydney, Austrailia",
    "estimatedLodgingCostPerDay": 130,
    "estimatedFlightCostPerPerson": 950,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "opera house and city buildings on the water with boats"
    },
    {
    "id": 4,
    "destination": "Cartagena, Colombia",
    "estimatedLodgingCostPerDay": 65,
    "estimatedFlightCostPerPerson": 350,
    "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "alt": "boats at a dock during the day time"
    },
    {
    "id": 5,
    "destination": "Madrid, Spain",
    "estimatedLodgingCostPerDay": 150,
    "estimatedFlightCostPerPerson": 650,
    "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with clear skys and a road in the day time"
    },
    {
    "id": 6,
    "destination": "Jakarta, Indonesia",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 890,
    "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "lit up city at night"
    },
    {
    "id": 7,
    "destination": "Paris, France",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 395,
    "image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    "alt": "city during the day time with eiffel tower"
    },
    {
    "id": 8,
    "destination": "Tokyo, Japan",
    "estimatedLodgingCostPerDay": 125,
    "estimatedFlightCostPerPerson": 1000,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80",
    "alt": "city with people walking in crosswalk and brightly lit shops at night"
    },
    {
    "id": 9,
    "destination": "Amsterdam, Netherlands",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 950,
    "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "canal with boats and trees and buildings along the side"
    },
    {
    "id": 10,
    "destination": "Toronto, Canada",
    "estimatedLodgingCostPerDay": 90,
    "estimatedFlightCostPerPerson": 450,
    "image": "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80"
    },
    {
    "id": 11,
    "destination": "Mikonos, Greece",
    "estimatedLodgingCostPerDay": 140,
    "estimatedFlightCostPerPerson": 1000,
    "image": "https://images.unsplash.com/photo-1573783309724-e44b859f5a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
    "alt": "cityscape along the water during the day"
    },
    {
    "id": 12,
    "destination": "Wellington, New Zealand",
    "estimatedLodgingCostPerDay": 150,
    "estimatedFlightCostPerPerson": 1200,
    "image": "https://images.unsplash.com/photo-1442483221814-59f7d8b22739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "overview of city with buildings, water and trees"
    },
    {
    "id": 13,
    "destination": "St. Petersburg, Russia",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 1100,
    "image": "https://images.unsplash.com/photo-1556543697-2fb00d31948a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "buildings and people crossing the street carrying shoping bags during the day"
    },
    {
    "id": 14,
    "destination": "Marrakesh, Morocco",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 830,
    "image": "https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
    "alt": "people buying oranges and other fruit from a street vendor"
    },
    {
    "id": 15,
    "destination": "Manila, Philippines",
    "estimatedLodgingCostPerDay": 40,
    "estimatedFlightCostPerPerson": 900,
    "image": "https://images.unsplash.com/photo-1555557356-51c5d7a8f4c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "colorful buildings near the water with docked boats"
    }
  ]
}
    
export default {
  agentsSampleData,
  travelersSampleData,
  tripsSampleData,
  destinationsSampleData
}