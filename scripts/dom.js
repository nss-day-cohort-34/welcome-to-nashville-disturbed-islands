// Park Section

// End Park Section

// Concert Section

// start concert collection

// Dom selectors
const musicResultsSelector = document.querySelector("#concertResults");
// const musicItinerarySelector = document.querySelector("#myConcert");

// Dom input for search results
const searchHTMLRender = HtmlInsert => {
  searchValue.innerHTML += HtmlInsert;
};
// Dom input for results results
const resultsHTMLRender = HtmlInsert => {
  musicResultsSelector.innerHTML += HtmlInsert;
};
// Dom input for itinerary results
const itineraryHTMLRender = HtmlInsert => {
  musicItinerarySelector.innerHTML += HtmlInsert;
};

// End Concert Section

// Restaurant Section
const restResultsSection = document.querySelector("#restaurantResults");
const restItinerarySection = document.querySelector("#myRestaurant");
const putRestaurantToDOM = htmlRep => {
  restResultsSection.innerHTML += htmlRep;
};
const putRestToItinerary = htmlRep => {
  restItinerarySection.innerHTML += htmlRep;
};
const restInput = document.querySelector("#restaurantSearch");
const searchButton = document.querySelector("#inputButton");
const toItineraryButton = document.querySelector("#addToItinerary");

// End Restaurant Section

// MeetUp Sectiot
// DOM Selectors
const meetUpSelector = document.querySelector("#eventSubmit");
const meetUpItinerarySelector = document.querySelector("#myMeetUp");

console.log(meetUpItinerarySelector);

const meetupResults = document.querySelector("#meetUpResults");

// DOM input for search results
const resultsHTMLResultsEvent = HTMLinsert => {
  meetupResults.innerHTML += HTMLinsert;
};

const resultsMeetUpHTMLRenderResultsSelector = HTMLinsert => {
  meetUpResultsSelector.innerHTML += HTMLinsert;
};

// Dom input for Iten results
const itineraryHTMLRenderItineraryEvents = HTMLinsert => {
  meetUpItinerarySelector.innerHTML = HTMLinsert;
};
// End MeetUp Section
