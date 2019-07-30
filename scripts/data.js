// Park Section
const parksAPI = (selection) => {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${selection}`)
    .then(response => response.json())
}

const getParkByName = (parkName) => {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?park_name=${parkName}`)
    .then(response => response.json())
}

// End Park Section



Concert Section
const concertData = (search) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=67yF0arVBeAHL7bl8nHGdz1e58DPQbjd&classificationName=music&dmaId=343&keyword=${search}`)
        .then(response => response.json())
        .then(data => console.log(data))
}

End Concert Section



// Restaurant Section
const restaurantDataFetcher = (search) => {
   return fetch(`https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?q=${search}&start=0&count=20&apikey=6f84aef0ac528e0cb5e716e3465de3f9`) 
    .then(results => results.json())
}

const idFetcher = (restID) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/restaurant?res_id=${restID}&apikey=6f84aef0ac528e0cb5e716e3465de3f9`)
    .then(r => r.json())
}





// End Restaurant Section



// MeetUp Section
// const eventbriteToken {

// }

// Used Private Key for token 
const meetUpAPI = (searchItem) => {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchItem}&location.address=nashville&token=YJTAUMDIRAXX76DJBHFA`, {
        "headers": {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        
}
    
        
const uniqueEvent = (Id) => {
    return fetch(`https://www.eventbriteapi.com/v3/events/${Id}/?token=YJTAUMDIRAXX76DJBHFA`, {
        "headers": {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        
}


// meetUpAPI("${userInput}")
// created constant for Userinput for text boc and submit buton
const eventsSearchButton = document.querySelector("#eventSubmit")
const userInput = document.querySelector("#meetUpSearch")


// console.log("userINputBox", userInput)
// created event for add Click

eventsSearchButton.addEventListener("click", () => {
    event.preventDefault()
    meetUpAPI(userInput.value)
})
// document.querySelector("#eventSubmit").addEventListener("click", () => {

// })

// End MeetUp Section