// Park Section



// End Park Section



// Concert Section
const musicSerchSelector = document.querySelector("#concertSearch")
const musicResultsSelector = document.querySelector("#concertResults")
const musicItinerarySelector = document.querySelector("#myConcert")

const concertHTMLRender = (HtmlInsert) => {

    const ConcertSerchInsert = musicSerchSelector.innerHTML += HtmlInsert;
    const ConcertResultsInsert = musicResultsSelector.innerHTML += HtmlInsert;
    const ConcertItineraryInsert = musicItinerarySelector.innerHTML += HtmlInsert;
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