// Park Section



// End Park Section



// Concert Section
concertData('rap')


// End Concert Section



// Restaurant Section
restaurantDataFetcher().then(restArray => {
    for (const restaurant of restArray.restaurants) {
        const restaurantHTML = createRestaurantHTML(restaurant)
        putRestaurantToDOM(restaurantHTML)
    }
}) 

// End Restaurant Section




// MeetUp Section



// End MeetUp Section