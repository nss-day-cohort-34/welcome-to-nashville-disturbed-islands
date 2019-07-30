// Park Section



// End Park Section



// Concert Section
// concertData('rap')


// End Concert Section



// // Restaurant Section
// searchButton.addEventListener("click", () => {
//     event.preventDefault()
//     restaurantDataFetcher(restInput.value)
//         .then(data => {
//         const restArray = data.restaurants

//         restArray.forEach(restaurant => {
//             const restHTML = createRestaurantHTML(restaurant.restaurant)
//             restResultsSection.innerHTML += restHTML
//         })
//     })
// })
// restResultsSection.addEventListener("click", (event) => {
//     const uniqueID = event.target.id.split("--")[1]
//     idFetcher(uniqueID)
//         .then(data => {
//             const finishedItem = itineraryHTMLCreator(data)
//             restItinerarySection.innerHTML += finishedItem
//         })

    /* 
    1.get the numeric id from the button
    2.use that id to find the matching p tag
    3.get the text content property of that p tag
    4.add that restaurant name to my itinerary dom element
//     */
// })

// End Restaurant Section


// MeetUp Section
document.querySelector("#eventSubmit").addEventListener("click", event => {
  const searchValue = document.querySelector("#meetUpSearch").value
  event.preventDefault()
  meetUpAPI(searchValue)
  .then(meetUpArray => {
    console.log(meetUpArray)
    meetUpArray.events.forEach(meetUp => {
      const htmlRep = meetUpHTML(meetUp);
      //  console.log("HTMLrep", htmlRep)
      console.log(htmlRep)
      resultsHTMLRender(htmlRep)
    })
  })
})


// putting event listner for a click, created storage for the event target (Event ID) invoved fetch call
// uniqueevent .then extrapulated the paramater of data and stored it into a const "eventHTML" 

document.querySelector("#meetUpResults").addEventListener("click", (event) => {
  console.log(event)
  const eventID = event.target.id
  // console.log(eventID)
  uniqueEvent(eventID)
    .then(data => {
      const eventHTML = meetUpId(data)

      itineraryHTMLRender(eventHTML)
    })
})

// End MeetUp Section