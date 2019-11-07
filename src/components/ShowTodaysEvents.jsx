import React, { Component } from 'react';
import Moment from 'react-moment';
import './ShowTodaysEvents.css';
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
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            eventSearch: "",
            btnClicked: false,
            show: false,
            updated: false,
            whichButton: '',
            searchString: '',
        };
    }

    searchHandler = (searchString) => {
        // event.preventDefault();
        let events = [];
        this.setState.btnClicked = true;
        fetch(`${URL}&q=${searchString}`, {
            headers
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ events: data.events })
            });
    }

    componentDidMount(props) {
        this.setState({
            whichButton: this.props.whichButton,
            searchString: this.props.searchString,
        }, console.log('props received!' + this.props.whichButton + " " + this.props.searchString));
        
        // if (nextProps.amount !== this.state.current) {
        //     this.setState(prevState => ({ previous: prevState.current, current: nextProps.amount }));
        // }
        if (this.props.whichButton === 'todaysEvents') {
            this.showTodaysEvents();
        } else {
            this.searchHandler(this.props.searchString)
        }
    }

    // componentDidUpdate(oldProps) {
    //     console.log('props updated!' + this.props.whichButton + " " + this.props.searchString);
       
    //     if (this.props.whichButton === 'todaysEvents') {
    //         this.showTodaysEvents();
    //     } else {
    //         this.searchHandler(this.props.searchString)
    //     }
    // }

    componentWillReceiveProps(nextProps) {

        console.log('props updated!' + nextProps.whichButton + " " + nextProps.searchString);
        // if (nextProps.amount !== this.state.current) {
        //     this.setState(prevState => ({ previous: prevState.current, current: nextProps.amount }));
        // }
        if (nextProps.whichButton === 'todaysEvents') {
            this.showTodaysEvents();
        } else {
            this.searchHandler(nextProps.searchString)
        }
        this.setState({updated: true});
    }

    showTodaysEvents = (event) => {
        // event.preventDefault();
        this.setState({ btnClicked: true }, console.log(this.state.btnClicked));
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
        // const obj = this.state.events;
        console.log(this.state.events);
        this.state.events.sort((a, b) => (a.eventDateLocal > b.eventDateLocal) ? 1 : -1); //sort by date ascending
        return this.state.events.map((event, index) => {
            const { id, name, eventDateLocal, venue, webURI, ticketInfo } = event //destructuring
            return (
                <tr key={id}>
                    <td><Moment format="ddd, MMM Do">{eventDateLocal}</Moment></td>
                    <td><Moment format="h:mm a">{eventDateLocal}</Moment></td>
                    <td><a href={`http://www.stubhub.com/${webURI}`}>{name}</a></td>
                    <td>{venue.name}</td>
                    
                    <td>{new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD' }
                    ).format(ticketInfo.minListPrice)}</td>
                    <td>{ticketInfo.totalTickets}</td>
                </tr>
            )
        })
    }

    

    render() { 
        let events = [];
        return (
            <div id ="tableContainer" class="container">
                <div id="eventsTable table-responsive">
                    <table class="table table-striped table-dark "id='events'>
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