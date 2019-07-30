// Park Section

const createParksHTML = parkObject => {
    const nameOfPark = parkObject.park_name.split(" ").join(",") 
    return ` 
        <h2>${parkObject.park_name}</h2>
        <p>${parkObject.mapped_location.human_address}</p>
        <button class="itineraryBTN" id=${nameOfPark}>Add to Itinerary</button>
   `
}

const createItineraryHTML = parkObject => {
    return ` 
        <h2>${parkObject.park_name}</h2>
        <p>${parkObject.mapped_location.human_address}</p>
   `
}



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
    // console.log("Event going into meetup HTML",event)
    return `
    <section class="meetUpResults">
    <h1>${event.name.text}</h1>
    <p id="eventP">${event.description.text}</p>
    <button id=${event.id}>Save</button>
    </section>
    
    `
}


const meetUpId = (event) => { 
    return `
    <section class="meetUpResults">
    <h1>${event.name.text}</h1>
    <p id="eventP">${event.description.text}</p>
    </section>
    `
}


// const meetupItinerary = (result) => {
//     return `<p id="itinerarResultHTML"></p>
//     <button>Save Event</button>`
    
// }

// End MeetUp Section