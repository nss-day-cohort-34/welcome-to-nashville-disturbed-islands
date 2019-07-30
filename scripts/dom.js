// Park Section



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
const restInput = document.querySelector("#restaurantSearch")
const searchButton = document.querySelector("#inputButton")
const toItineraryButton = document.querySelector("#addToItinerary")

// End Restaurant Section





// MeetUp Sectiot
// DOM Selectors
const meetUpItinerarySelector = document.querySelector("section#myMeetUps")
console.log(meetUpItinerarySelector)
const meetUpSelector = document.querySelector("#eventSubmit");

const meetupResults = document.querySelector("#meetUpResults")

// DOM input for search results
const resultsHTMLRender = HTMLinsert => {
    meetupResults.innerHTML += HTMLinsert;
    
    
};

// const resultsMeetUpHTMLRender = HTMLinsert => {
//     meetUpResultsSelector.innerHTML += HTMLinsert
// }

// Dom input for Iten results
const itineraryHTMLRender = HTMLinsert => {
    meetUpItinerarySelector.innerHTML = HTMLinsert
}
