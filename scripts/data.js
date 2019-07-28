// Park Section
const parksAPI = (selection) => {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?`)
        .then(response => response.json())
        .then(data => console.log(data))
}

parksAPI()

// End Park Section



// Concert Section
const concertData = (search) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=67yF0arVBeAHL7bl8nHGdz1e58DPQbjd&classificationName=music&dmaId=343&keyword=${search}`)
        .then(response => response.json())
        .then(data => console.log(data))
}

// End Concert Section



// Restaurant Section
const restaurantDataFetcher = () => {
    return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=a0eaa35e7faf94a1910b953153e9caa4")
        .then(results => results.json())

}


// End Restaurant Section



// MeetUp Section
// const eventbriteToken {

// }

// Used Private Key for token 
const meetUpAPI = (events) => {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${events}&location.address=nashville&token=YJTAUMDIRAXX76DJBHFA`, {
        "headers": {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))


}
meetUpAPI("movie")

// End MeetUp Section