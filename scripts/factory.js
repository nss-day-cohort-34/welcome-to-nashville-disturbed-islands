// Park Section



// End Park Section



// Concert Section



// End Concert Section



// Restaurant Section
const createRestaurantHTML = (restaurant) => {
    return `<div id="restaurant--${restaurant.id}">
            <p class="restaurantHTML" id="restName--${restaurant.id}">${restaurant.name}</p>
            <button type="submit" id="add--${restaurant.id}">Add To Itinerary</button>
            </div>`
            
}
const itineraryHTMLCreator = (result) => {
    return `<p id="itineraryRestHTML">Let's go eat at ${result.name}</p>`
}



// End Restaurant Section




// MeetUp Section



// End MeetUp Section