// Reference to dom
// Event listener
// Get data
// Html Representation
// Render to dom

const resultsContainer = document.querySelector("#parkResults");
console.log(resultsContainer);
document.querySelector("#parkBtn").addEventListener("click", event => {
  event.preventDefault();
  const parkInput = document.querySelector("#parkInput").value;
  console.log(parkInput);
  parksAPI(parkInput).then(parkArray => {
    parkArray.forEach(park => {
      const parkHTML = createParksHTML(park);
      parksToDom(resultsContainer, parkHTML);
    });
  });
});

const ItineraryContainer = document.querySelector("#myPark");

resultsContainer.addEventListener("click", event => {
  if (event.target.className.includes("BTN")) {
    const parkName = event.target.id.split(",").join(" ");
    getParkByName(parkName).then(park => {
      console.log(park);
      console.log(park[0]);
      const parkHTML = createItineraryHTML(park[0]);
      parkItineraryToDom(ItineraryContainer, parkHTML);
    });
  }
});

// const itineraryParksFunction = () => {
//     const buttonToSaveToItinerary = document.querySelectorAll(".itineraryBTN")
//     buttonToSaveToItinerary.forEach(button => {
//         button.addEventListener("click", () => {
//         const parkName = event.target.id
//         const parkName2 = parkName.split(",").join(" ")
//         getParkByName(parkName2)
//         .then((data) => {
//         data.forEach(park => {
//             const itineraryHTML = createItineraryHTML(park)
//             parkItineraryToDom(itineraryHTML)
//     })
// })

// End Park Section

// Concert Section
document.querySelector("#concertSearchBut").addEventListener("click", event => {
  // stops the form from refreshing
  event.preventDefault();
  const musicResultsSelector = document.querySelector("#concertResults");
  //   empty string allows on set of info to be viewed at a time
  musicResultsSelector.innerHTML = "";
  //   stores value from input field
  const musicSearchValue = document.querySelector("#concertSearch").value;
  concertData(musicSearchValue)
    .then(concertArray => {
      const musicSearchArray = concertArray._embedded.events;
      musicSearchArray.forEach(concert => {
        const musicHtmlRep = htmlConcert(concert);
        resultsDomRender(musicHtmlRep);
      });
    })
    .then(() => {
      buttonThing();
    });
});

const buttonThing = () => {
  const buttonSave = document.querySelectorAll(".saveMe");
  buttonSave.forEach(musicButton => {
    musicButton.addEventListener("click", () => {
      const header2 = musicButton.parentElement.childNodes[1];
      const header4 = musicButton.parentElement.childNodes[3];
      const para = musicButton.parentElement.childNodes[5];
      console.log(musicButton.parentElement.childNodes);
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
  restResultsSection.innerHTML = "";

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
//     */
});

// End Restaurant Section

// MeetUp Section
document.querySelector("#eventSubmit").addEventListener("click", event => {
  event.preventDefault();
  const searchValue = document.querySelector("#meetUpSearch").value;
  meetUpAPI(searchValue).then(meetUpArray => {
    meetUpArray.events.forEach(meetUp => {
      const htmlRep = meetUpHTML(meetUp);
      console.log("HTMLrep", htmlRep);
      resultsHTMLRender(htmlRep);
    });
  });
});

// putting event listner for a click, created storage for the event target (Event ID) invoved fetch call
// uniqueevent .then extrapulated the paramater of data and stored it into a const "eventHTML"

document.querySelector("#meetUpResults").addEventListener("click", event => {
  event.preventDefault();
  const eventID = event.target.id;
  uniqueEvent(eventID).then(data => {
    const eventHTML = meetUpId(data);
    itineraryHTMLRender(eventHTML);
  });
});
