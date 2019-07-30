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
searchButton.addEventListener("click", () => {
  event.preventDefault();
  restaurantDataFetcher(restInput.value).then(data => {
    const restArray = data.restaurants;

    restArray.forEach(restaurant => {
      const restHTML = createRestaurantHTML(restaurant.restaurant);
      restResultsSection.innerHTML += restHTML;
    });
  });
});
restResultsSection.addEventListener("click", event => {
  const uniqueID = event.target.id.split("--")[1];
  idFetcher(uniqueID).then(data => {
    const finishedItem = itineraryHTMLCreator(data);
    restItinerarySection.innerHTML += finishedItem;
  });

  /* 
    1.get the numeric id from the button
    2.use that id to find the matching p tag
    3.get the text content property of that p tag
    4.add that restaurant name to my itinerary dom element
    */
});

// End Restaurant Section

const searchValue = document.querySelector("#meetUpSearch");

// MeetUp Section
document.querySelector("#eventSubmit").addEventListener("click", event => {
  event.preventDefault();
  meetUpAPI(searchValue.value).then(meetUpArray => {
    meetUpArray.events.forEach(meetUp => {
      const htmlRep = meetUpHTML(meetUp);
      //  console.log("HTMLrep", htmlRep)

      resultsMeetUpHTMLRenderResultsSelector(htmlRep);
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

    itineraryHTMLRenderItineraryEvents(eventHTML);
  });
});

// End MeetUp Section
