
// when the user makes a ${selection} and clicks the "search" button (event) 
document.querySelector("#parkBTN").addEventListener("click", (event) => {
    // the value of ${selection} is stored into the variable parkInput
    const parkInput = document.querySelector("#parkInput").value
    // invokes the parksAPI function by passing the parkInput value into it and returns an array (parsed json where .then leaves off in data.js)
    parksAPI(parkInput)
    .then((parkArray) => {
        //iterates over the array and forEach park invokes the createParksHTML function for each item in the array and store it into parkHTML variable
    parkArray.forEach(park => { 
        const parkHTML = createParksHTML(park)
        // takes what's in the parkHTML variable and that is passed through the parksToDom function, which when invoked adds to the parkResultsContainer
        parksToDom(parkHTML)
    });
    }) 
    .then(() => {
        // this ensures that the .itineraryBTN is there each time this function runs 
        itineraryParksFunction()
    })
})


// const itineraryParksFunction = () => {
//     const buttonToSaveToItinerary = document.querySelectorAll(".itineraryBTN")
//     buttonToSaveToItinerary.forEach(button => {
//         button.addEventListener("click", () => {
//         const parkName = event.target.id
//         const parkName2 = parkName.split(",").join(" ")
//         getParkByName(parkName2)
//         .then((data) => {
//         data.forEach(park => { 
//             const itineraryHTML = createItineraryHTML(park)
//             parkItineraryToDom(itineraryHTML)
//     })
// })


// const itineraryParksFunction = () => {
//     document.querySelectorAll(".itineraryBTN").addEventListener("click", (event) => {
//         const parkName = event.target.id
//         const parkName2 = parkName.split(",").join(" ")
//         getParkByName(parkName2)
//         .then((data) => {
//         data.forEach(park => { 
//             const itineraryHTML = createItineraryHTML(park)
//             parkItineraryToDom(itineraryHTML)
//     });
// })


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