import React, { Component } from 'react';
import Moment from 'react-moment';
const moment = require('moment');
const fetch = require("node-fetch");
const city = "Milwaukee";
const state = "WI";
const venue = 'Shank Hall'
const rows = '50'
const URL = "https://api.stubhub.com/sellers/search/events/v3?state=WI&rows=50&parking=false";
const headers = {
    "Authorization": "Bearer mYTy3Gb8J4uYkSCs7ioVCvZJiqTF",
    "Accept": "application/json"
    }      

class ShowTodaysEvents extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            eventSearch: "",
            btnClicked: false,
        };
    }

    searchHandler = (event) => {
        event.preventDefault();
        let events = [];
        this.setState.btnClicked = true;
        fetch(`${URL}&q=${this.state.eventSearch}`, {
            headers
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ events: data.events })
            });
    }

    showTodaysEvents = (event) => {
        event.preventDefault();
        this.setState({btnClicked: true})
        console.log(this.state.btnClicked);
        const now = moment();
        const tomorrow = moment(now).add(1, 'd');
        let events = [];
        fetch(`${URL}&dateLocal=${now.format("YYYY-MM-DD")} TO ${tomorrow.format("YYYY-MM-DD")}`, {
            headers
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ events: data.events })
            });
    }

    myChangeHandler = (event) => {
        this.setState({ eventSearch: event.target.value });
    }

    renderTableData() {
        const obj = this.state.events;
        obj.sort((a, b) => (a.eventDateLocal > b.eventDateLocal) ? 1 : -1); //sort by date ascending
        return obj.map((event, index) => {
            const { id, name, eventDateLocal, venue, webURI, ticketInfo } = event //destructuring
            return (
                <tr key={id}>
                    <td><Moment format="dddd, MMMM Do">{eventDateLocal}</Moment></td>
                    <td><Moment format="hh:mm a">{eventDateLocal}</Moment></td>
                    <td><a href={`http://www.stubhub.com/${webURI}`}>{name}</a></td>
                    <td>{venue.name}</td>
                    <td>${ticketInfo.minListPrice}</td>
                    <td>{ticketInfo.totalTickets}</td>
                </tr>
            )
        })
    }

    

    render() { 
        let events = [];
        return (
            <div class = "container">
                <div id="pageTitle">
                    <h1>Wisconsin Event Guide</h1>
                    <h4>This site searches Wisconsin events using the StubHub API.</h4>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <input class="btn btn-sm btn-primary" onClick={this.showTodaysEvents} type="submit" value="Show Today's Events"></input>
                    </div>
                    <div class="col-sm">
                        <div id="searchForm">
                            <form onSubmit={this.searchHandler}>
                                <input
                                    type='text'
                                    onChange={this.myChangeHandler}
                                />
                                <input class="btn btn-sm btn-primary"
                                    type='submit'
                                    value="Search"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div id="eventsTable">
                    <table class="table "id='events'>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Event Name</th>
                                <th>Venue</th>
                                <th>Lowest Price</th>
                                <th>Tickets Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    {this.state.btnClicked === true && this.state.events.length === 0 &&
                        <p>No Results Found</p>
                    }
                </div>
            </div>
        )
    };
}
 
export default ShowTodaysEvents;