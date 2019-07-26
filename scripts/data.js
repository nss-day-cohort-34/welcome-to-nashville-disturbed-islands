// Park Section
const parksAPI = (selection) => {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?`)
    .then(response => response.json())
    .then(data => console.log(data))
}

parksAPI()

// End Park Section



// Concert Section



// End Concert Section



// Restaurant Section



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