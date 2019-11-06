import React, { Component } from 'react';

let data = [
        {
            id: 104342681,
            status: 'Active',
            locale: 'en_US',
            name: 'No Quarter - Led Zeppelin Tribute Tickets (21+ Event)',
            description: 'No Quarter - Led Zeppelin Tribute Shank Hall Tickets - Buy ' +
                'and sell No Quarter - Led Zeppelin Tribute Milwaukee ' +
                'Tickets for December 7 at Shank Hall in Milwaukee, WI on ' +
                'StubHub!',
            webURI: 'no-quarter-led-zeppelin-tribute-tickets-no-quarter-led-zeppelin-tribute-milwaukee-shank-hall-12-7-2019/event/104342681/',
            eventDateLocal: '2019-12-07T20:00:00-0600',
            eventDateUTC: '2019-12-08T02:00:00+0000',
            createdDate: '2019-09-17T19:20:14+0000',
            lastUpdatedDate: '2019-09-17T19:20:36+0000',
            hideEventDate: false,
            hideEventTime: false,
            venue: {
                id: 3624,
                name: 'Shank Hall',
                city: 'Milwaukee',
                state: 'WI',
                postalCode: '53202',
                country: 'US',
                venueConfigId: 4364,
                venueConfigName: 'General Admission Only'
            },
            timezone: 'CST',
            performers: [[Object]],
            ancestors: { categories: [Array], groupings: [Array], performers: [Array] },
            currencyCode: 'USD',
            ticketInfo: {
                minListPrice: 26.9,
                maxListPrice: 47.25,
                totalTickets: 16,
                totalListings: 3
            }
        },
        {
            id: 104336334,
            status: 'Active',
            locale: 'en_US',
            name: 'Samantha Fish Tickets (21+ Event)',
            description: 'Samantha Fish Shank Hall Tickets - Buy and sell Samantha Fish ' +
                'Milwaukee Tickets for December 4 at Shank Hall in Milwaukee, WI on ' +
                'StubHub!',
            webURI: 'samantha-fish-tickets-samantha-fish-milwaukee-shank-hall-12-4-2019/event/104336334/',
            eventDateLocal: '2019-12-04T20:00:00-0600',
            eventDateUTC: '2019-12-05T02:00:00+0000',
            createdDate: '2019-09-13T16:26:30+0000',
            lastUpdatedDate: '2019-09-13T16:26:47+0000',
            hideEventDate: false,
            hideEventTime: false,
            venue: {
                id: 3624,
                name: 'Shank Hall',
                city: 'Milwaukee',
                state: 'WI',
                postalCode: '53202',
                country: 'US',
                venueConfigId: 4364,
                venueConfigName: 'General Admission Only'
            },
            timezone: 'CST',
            performers: [[Object]],
            ancestors: { categories: [Array], groupings: [Array], performers: [Array] },
            currencyCode: 'USD',
            ticketInfo: {
                minListPrice: 57.91,
                maxListPrice: 82.95,
                totalTickets: 24,
                totalListings: 4
            }
        },
]

// import { getEventsFromAPI } from './getEvents'
const getEvents = require('../library/getEvents')

// let events = getEvents.getEventsFromAPI();
let events;
let eventsArray = [];
// console.log(data);
// console.log(events);


eventsArray = Object.keys(data).map(i => data[i]);
console.log(eventsArray);

class TodaysEvents extends Component {
    state = {  }
    render() { 
        return (<div><h1>Today's Events:</h1>
            {eventsArray.map((event, index) => (
                <p>{event.name}</p>
            ))}
        </div> )
    }

}

export default TodaysEvents;