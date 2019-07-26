// Park Section



// End Park Section



// Concert Section



// End Concert Section



// Restaurant Section
const restaurantDataFetcher = () => {
   return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=a0eaa35e7faf94a1910b953153e9caa4") 
    .then(results => results.json())
    
}


// End Restaurant Section



// MeetUp Section



// End MeetUp Section