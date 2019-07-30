// Park Section



// End Park Section



// Concert Section
// concertData('rap')


// End Concert Section



// Restaurant Section
// restaurantDataFetcher().then(restArray => {
//     for (const restaurant of restArray.restaurants) {
//         const restaurantHTML = createRestaurantHTML(restaurant)
//         putRestaurantToDOM(restaurantHTML)
//     }
// }) 

// End Restaurant Section


const searchValue = document.querySelector("#meetUpSearch")

// MeetUp Section
document.querySelector("#eventSubmit").addEventListener("click", event => {
  event.preventDefault();
  meetUpAPI(searchValue.value).then(meetUpArray => {
    meetUpArray.events.forEach(meetUp => {
      const htmlRep = meetUpHTML(meetUp);
      //  console.log("HTMLrep", htmlRep)

      resultsMeetUpHTMLRenderResultsSelector(htmlRep);
    });
  });
});


// putting event listner for a click, created storage for the event target (Event ID) invoved fetch call
// uniqueevent .then extrapulated the paramater of data and stored it into a const "eventHTML" 

document.querySelector("#meetUpResults").addEventListener("click", (event) => {
  console.log(event)
  const eventID = event.target.id
  // console.log(eventID)
  uniqueEvent(eventID)
    .then(data => {
      const eventHTML = meetUpId(data)

      itineraryHTMLRenderItineraryEvents(eventHTML)
    })
})

// End MeetUp Section