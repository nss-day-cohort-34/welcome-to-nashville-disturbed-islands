// Park Section

const parkItineraryContainer = document.querySelector("#myPark")
const parkResultsContainer = document.querySelector("#parkResults")

const parksToDom = parkHTML => {
    parkResultsContainer.innerHTML += parkHTML
}

const parkItineraryToDom = itineraryHTML => {
     parkItinerarySection.innerHTML = itineraryHTML 
}



// End Park Section



// Concert Section



// End Concert Section



// Restaurant Section
const restResultsSection = document.querySelector("#restaurantResults")
const restItinerarySection = document.querySelector("#myRestaurant")
const putRestaurantToDOM = (htmlRep) => {
    restResultsSection.innerHTML += htmlRep
}
const putRestToItinerary = (htmlRep) => {
    restItinerarySection.innerHTML += htmlRep
}



// End Restaurant Section




// MeetUp Section



// End MeetUp Section