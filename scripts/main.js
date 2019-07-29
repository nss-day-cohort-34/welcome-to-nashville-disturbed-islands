
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

const itineraryParksFunction = () => {
    document.querySelector("#parkResults").addEventListener("click", (event) => {
        const parkName = event.target.id
        const parkName2 = parkName.split(",").join(" ")
        getParkByName(parkName2)
        .then((data) => {
        data.forEach(park => { 
            const itineraryHTML = createItineraryHTML(park)
            parkItineraryToDom(itineraryHTML)
    });
})


// End Park Section





// Concert Section
concertData('rap')


// End Concert Section



// Restaurant Section
// restaurantDataFetcher().then(restArray => {
//     for (const restaurant of restArray.restaurants) {
//         const restaurantHTML = createRestaurantHTML(restaurant)
//         putRestaurantToDOM(restaurantHTML)
//     }
// }) 

// End Restaurant Section




// MeetUp Section



// End MeetUp Section