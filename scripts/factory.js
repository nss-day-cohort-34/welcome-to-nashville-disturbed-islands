// Park Section

// End Park Section

// Concert Section
// const getValue = () => {
//     let valueInput = document.getElementById("concertSearch").value;
//     console.log(valueInput);
// }
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
            <button`;
};
const itineraryHTML = result => {
  return `<p id="itineraryRestHTML">Let's go eat at ${result}</p>`;
};

// End Restaurant Section

// MeetUp Section

// End MeetUp Section
