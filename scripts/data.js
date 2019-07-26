// Park Section



// End Park Section



// Concert Section
const concertData = (search) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=67yF0arVBeAHL7bl8nHGdz1e58DPQbjd&classificationName=music&dmaId=343&keyword=${search}`)
        .then(response => response.json())
        .then(data => console.log(data))
}

// End Concert Section



// Restaurant Section



// End Restaurant Section




// MeetUp Section



// End MeetUp Section