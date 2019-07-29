// Park Section

// End Park Section

// Concert Section
document.querySelector("#concertSearchBut").addEventListener("click", event => {
  event.preventDefault();
  const musicResultsSelector = document.querySelector("#concertResults");
  musicResultsSelector.innerHTML = "";
  const searchValue = document.querySelector("#concertSearch").value;
  concertData(searchValue).then(concertArray => {
    const searchArray = concertArray._embedded.events;
    searchArray.forEach(concert => {
      const htmlRep = htmlConcert(concert);
      resultsHTMLRender(htmlRep);
    });
  });
});

// End Concert Section

// Restaurant Section
restaurantDataFetcher().then(restArray => {
  for (const restaurant of restArray.restaurants) {
    const restaurantHTML = createRestaurantHTML(restaurant);
    putRestaurantToDOM(restaurantHTML);
  }
});

// End Restaurant Section

// MeetUp Section

// End MeetUp Section
