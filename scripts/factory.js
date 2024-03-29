// Park Section
const createParksHTML = parkObject => {
  const nameOfPark = parkObject.park_name.split(" ").join(",");
  return ` 
        <h2>${parkObject.park_name}</h2>
        <p>${parkObject.mapped_location.human_address}</p>
        <button class="BTN" id=${nameOfPark}>Add to Itinerary</button>
   `;
};

const createItineraryHTML = parkObject => {
  return ` 
        <h2>${parkObject.park_name}</h2>
        <p>${parkObject.mapped_location.human_address}</p>
   `;
};

// End Park Section

// Concert Section

const htmlConcert = concertObj => {
  console.log(concertObj);
  return `
    <section class="concertSearch">
        <h2>${concertObj.name}</h2>
        <h4>Date: ${concertObj.dates.start.localDate}</h4>
        <p>Location: ${concertObj._embedded.venues[0].name}</p>
        <button class="saveMe">Save me</button>
    </section>
    `;
};

// End Concert Section

// Restaurant Section
const createRestaurantHTML = restaurant => {
  return `<div id="restaurant--${restaurant.id}">
            <p class="restaurantHTML" id="restName--${restaurant.id}">${
    restaurant.name
  }</p>
            <button type="submit" id="add--${
              restaurant.id
            }">Add To Itinerary</button>
            </div>`;
};
const itineraryHTMLCreator = result => {
  return `<p id="itineraryRestHTML">Let's go eat at ${result.name}!</p>`;
};

// // End Restaurant Section

// MeetUp Section
const meetUpHTML = event => {
  // console.log("Event going into meetup HTML",event)
  return `
    <section class="meetUpResults">
    <h1>${event.name.text}</h1>
    <p id="eventP">${event.description}</p>
    <button id=${event.id}>Save</button>
    </section>
    
    `;
};

const meetUpId = event => {
  return `
    <section class="meetUpResults">
    <h1>${event.name.text}</h1>
    <p id="eventP">${event.description.text}</p>
    </section>
    `;
};
console.log(meetUpId);
// const meetupItinerary = (result) => {
//     return `<p id="itinerarResultHTML"></p>
//     <button>Save Event</button>`

// }

// End MeetUp Section
