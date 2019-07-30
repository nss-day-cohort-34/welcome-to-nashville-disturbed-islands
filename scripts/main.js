// Park Section

// End Park Section

// Concert Section
document.querySelector("#concertSearchBut").addEventListener("click", event => {
  // stops the form from refreshing
  event.preventDefault();
  const musicResultsSelector = document.querySelector("#concertResults");
  //   empty string allows on set of info to be viewed at a time
  musicResultsSelector.innerHTML = "";
  //   stores value from input field
  const searchValue = document.querySelector("#concertSearch").value;
  concertData(searchValue)
    .then(concertArray => {
      const searchArray = concertArray._embedded.events;
      searchArray.forEach(concert => {
        const htmlRep = htmlConcert(concert);
        resultsHTMLRender(htmlRep);
      });
    })
    .then(() => {
      buttonThing();
    });
});

const buttonThing = () => {
  const buttonSave = document.querySelectorAll(".saveMe");
  buttonSave.forEach(button => {
    button.addEventListener("click", () => {
      const header2 = button.parentElement.childNodes[1];
      const header4 = button.parentElement.childNodes[3];
      const para = button.parentElement.childNodes[5];
      console.log(button.parentElement.childNodes);
      const newHtml = `<h2>${header2.innerHTML}</h2>
    <h4>${header4.innerHTML}</h4>
    <p>${para.innerHTML}</p>
    `;
      const musicItinerarySelector = document.querySelector("#myConcert");
      musicItinerarySelector.innerHTML = newHtml;
    });
    console.log(buttonSave);
  });
};

// End Concert Section

// Restaurant Section
// restaurantDataFetcher().then(restArray => {
//     for (const restaurant of restArray.restaurants) {
//         const restaurantHTML = createRestaurantHTML(restaurant)
//         putRestaurantToDOM(restaurantHTML)
//     }
// })

// End Restaurant Section

const searchValue = document.querySelector("#meetUpSearch");

// MeetUp Section
document.querySelector("#eventSubmit").addEventListener("click", event => {
  event.preventDefault();
  meetUpAPI(searchValue.value).then(meetUpArray => {
    meetUpArray.events.forEach(meetUp => {
      const htmlRep = meetUpHTML(meetUp);
      //  console.log("HTMLrep", htmlRep)

      resultsHTMLRender(htmlRep);
    });
  });
});

// putting event listner for a click, created storage for the event target (Event ID) invoved fetch call
// uniqueevent .then extrapulated the paramater of data and stored it into a const "eventHTML"

document.querySelector("#meetUpResults").addEventListener("click", event => {
  console.log(event);
  const eventID = event.target.id;
  // console.log(eventID)
  uniqueEvent(eventID).then(data => {
    const eventHTML = meetUpId(data);

    itineraryHTMLRender(eventHTML);
  });
});

// End MeetUp Section
