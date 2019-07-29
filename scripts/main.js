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
         console.log("HTMLrep", htmlRep)
     resultsHTMLRender(htmlRep);
   });
 });
});


// End MeetUp Section