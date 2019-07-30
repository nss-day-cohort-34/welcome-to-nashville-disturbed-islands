// Park Section



// End Park Section



// Concert Section
// concertData('rap')


// End Concert Section



// Restaurant Section
searchButton.addEventListener("click", () => {
    event.preventDefault()
    restaurantDataFetcher(restInput.value)
        .then(data => {
        const restArray = data.restaurants

        restArray.forEach(restaurant => {
            const restHTML = createRestaurantHTML(restaurant.restaurant)
            restResultsSection.innerHTML += restHTML
        })
    })
})
restResultsSection.addEventListener("click", (event) => {
    const uniqueID = event.target.id.split("--")[1]
    idFetcher(uniqueID)
        .then(data => {
            const finishedItem = itineraryHTMLCreator(data)
            restItinerarySection.innerHTML += finishedItem
        })

    /* 
    1.get the numeric id from the button
    2.use that id to find the matching p tag
    3.get the text content property of that p tag
    4.add that restaurant name to my itinerary dom element
    */
})

// End Restaurant Section




// MeetUp Section



// End MeetUp Section