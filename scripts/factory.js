// Park Section



// End Park Section



// Concert Section



// End Concert Section



// Restaurant Section
const createRestaurantHTML = (restaurant) => {
    return `<p class="restaurantHTML">${restaurant.name}</p>
            <button></button>`
}
const itineraryHTML = (result) => {
    return `<p id="itineraryRestHTML">Let's go eat at ${result}</p>`
}


// End Restaurant Section




// MeetUp Section
const meetUpHTML = (event) => { 
    console.log("Event going into meetup HTML",event)
    return `
    <section class="meetUpResults">
    <h1>${event.name.text}</h1>
    <h3>${event.description.text}</h3>
    <button>Save</button>
    </section>
    
    `
}

// const meetupItinerary = (result) => {
//     return `<p id="itinerarResultHTML"></p>
//     <button>Save Event</button>`
    
// }

// End MeetUp Section