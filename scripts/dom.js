// Park Section



// End Park Section



// Concert Section



// End Concert Section



// Restaurant Section
// const restResultsSection = document.querySelector("#restaurantResults")
// const restItinerarySection = document.querySelector("#myRestaurant")
// const putRestaurantToDOM = (htmlRep) => {
//     restResultsSection.innerHTML += htmlRep
// }
// const putRestToItinerary = (htmlRep) => {
//     restItinerarySection.innerHTML += htmlRep
// }



// End Restaurant Section





// MeetUp Sectiot
// DOM Selectors
const meetUpSelector = document.querySelector("#eventSubmit");
const meetUpItinerarySelector = document.querySelector("#myMeetup")

const meetupResults = document.querySelector("#meetUpResults")

// DOM input for search results
const resultsHTMLRender = HTMLinsert => {
    meetupResults.innerHTML += HTMLinsert;
    
    
};

const resultsMeetUpHTMLRender = HTMLinsert => {
    meetUpResultsSelector.innerHTML += HTMLinsert
}

// Dom input for Iten results
const itineraryHTMLRender = HTMLinsert => {
    meetUpItinerarySelector.innerHTML += HTMLinsert
}

// End MeetUp Section