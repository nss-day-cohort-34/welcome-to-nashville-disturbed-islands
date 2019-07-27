// Park Section



// End Park Section



// Concert Section
// Dom selectors
const musicSerchSelector = document.querySelector("#concertSearch")
const musicResultsSelector = document.querySelector("#concertResults")
const musicItinerarySelector = document.querySelector("#myConcert")

// Dom input for search results
const searchHTMLRender = (HtmlInsert) => {
    musicSerchSelector.innerHTML += HtmlInsert;
}
// Dom input for results results
const resultsHTMLRender = (HtmlInsert) => {
    musicResultsSelector.innerHTML += HtmlInsert;
}
// Dom input for itinerary results
const itineraryHTMLRender = (HtmlInsert) => {
    musicItinerarySelector.innerHTML += HtmlInsert;
}


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