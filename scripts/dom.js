// Park Section



const parksToDom = (location, string) => {
    location.innerHTML += string
}

const parkItineraryToDom = (location, itineraryHTML) => {
     location.innerHTML = itineraryHTML 
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
const restInput = document.querySelector("#restaurantSearch")
const searchButton = document.querySelector("#inputButton")
const toItineraryButton = document.querySelector("#addToItinerary")

// End Restaurant Section





// MeetUp Sectiot
// DOM Selectors
const meetUpSelector = document.querySelector("#eventSubmit");
const meetUpItinerarySelector = document.querySelector("#myMeetUp")

// console.log(meetUpItinerarySelector)

const meetupResults = document.querySelector("#meetUpResults")

// DOM input for search results
const resultsHTMLResultsEvent = HTMLinsert => {
    meetupResults.innerHTML += HTMLinsert;
    
    
};

const resultsMeetUpHTMLRenderResultsSelector = HTMLinsert => {
    meetUpResultsSelector.innerHTML += HTMLinsert
}

// Dom input for Iten results
const itineraryHTMLRenderItineraryEvents = HTMLinsert => {
    meetUpItinerarySelector.innerHTML = HTMLinsert

}
// End MeetUp Section