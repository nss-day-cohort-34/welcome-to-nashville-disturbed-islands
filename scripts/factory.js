// Park Section



// End Park Section



// Concert Section



// End Concert Section



// // Restaurant Section
// const createRestaurantHTML = (restaurant) => {
//     return `<div id="restaurant--${restaurant.id}">
//             <p class="restaurantHTML" id="restName--${restaurant.id}">${restaurant.name}</p>
//             <button type="submit" id="add--${restaurant.id}">Add To Itinerary</button>
//             </div>`
            
// }
// const itineraryHTMLCreator = (result) => {
//     return `<p id="itineraryRestHTML">Let's go eat at ${result.name}</p>`
// }



// // End Restaurant Section




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