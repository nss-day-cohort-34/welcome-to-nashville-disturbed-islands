// Park Section

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
  return `<p class="restaurantHTML">${restaurant.name}</p>
            <button></button>`;
};
const itineraryHTML = result => {
  return `<p id="itineraryRestHTML">Let's go eat at ${result}</p>`;
};

// End Restaurant Section

// MeetUp Section
const meetUpHTML = event => {
  // console.log("Event going into meetup HTML",event)
  return `
    <section class="meetUpResults">
    <h1>${event.name.text}</h1>
    <p id="eventP">${event.description.text}</p>
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

// const meetupItinerary = (result) => {
//     return `<p id="itinerarResultHTML"></p>
//     <button>Save Event</button>`

// }

// End MeetUp Section
