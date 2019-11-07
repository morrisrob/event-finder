/* eslint-disable no-undef */
const fetch = require("node-fetch");
const city = "Milwaukee";
const venue = "Shank Hall";
let events;

getEventsFromAPI = () => {
    fetch(`https://api.stubhub.com/sellers/search/events/v3?city=${city}&venue=${venue}`, {
        headers: {
            "Authorization": "Bearer mYTy3Gb8J4uYkSCs7ioVCvZJiqTF",
            "Accept": "application/json"
        }
    })

    .then(response => response.json())
    .then(data => {
        // console.log(data);
        events = data.events;
        console.log(events)
    })

    return events;
};

module.exports.getEventsFromAPI = getEventsFromAPI;