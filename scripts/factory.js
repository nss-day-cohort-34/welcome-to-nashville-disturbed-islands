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
        <h1>${concertObj.name}</h1>
        <h2>${concertObj.dates.start.dateTime}</h2>
        <button>Save me</button>
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
