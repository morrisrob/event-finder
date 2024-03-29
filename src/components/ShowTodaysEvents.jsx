import React, { Component } from "react";
import Moment from "react-moment";
import "./ShowTodaysEvents.css";
const moment = require("moment");
const fetch = require("node-fetch");
const URL =
  "https://api.stubhub.com/sellers/search/events/v3?state=WI&rows=50&parking=false";
const headers = {
  Authorization: "Bearer mYTy3Gb8J4uYkSCs7ioVCvZJiqTF",
  Accept: "application/json"
};

class ShowTodaysEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventSearch: "",
      btnClicked: false,
      show: false,
      updated: false,
      whichButton: "",
      searchString: ""
    };
  }

  searchHandler = searchString => {
    // event.preventDefault();
    let events = [];
    this.setState.btnClicked = true;
    fetch(`${URL}&q=${searchString}`, {
      headers
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ events: data.events });
      });
  };

  componentDidMount(props) {
    this.setState({
      whichButton: this.props.whichButton,
      searchString: this.props.searchString
    });

    if (this.props.whichButton === "todaysEvents") {
      this.showTodaysEvents();
    } else {
      this.searchHandler(this.props.searchString);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.whichButton === "todaysEvents") {
      this.showTodaysEvents();
    } else {
      this.searchHandler(nextProps.searchString);
    }
    this.setState({ updated: true });
  }

  showTodaysEvents = event => {
    this.setState({ btnClicked: true });
    const now = moment();
    const tomorrow = moment(now).add(1, "d");
    let events = [];
    fetch(
      `${URL}&dateLocal=${now.format("YYYY-MM-DD")} TO ${tomorrow.format(
        "YYYY-MM-DD"
      )}`,
      {
        headers
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ events: data.events });
      });
  };

  myChangeHandler = event => {
    this.setState({ eventSearch: event.target.value });
  };

  renderTableData() {
    this.state.events.sort((a, b) =>
      a.eventDateLocal > b.eventDateLocal ? 1 : -1
    ); //sort by date ascending
    return this.state.events.map((event, index) => {
      const { id, name, eventDateLocal, venue, webURI, ticketInfo } = event; //destructuring
      return (
        <tr key={id}>
          <td label="Date">
            <Moment format="ddd, MMM Do">{eventDateLocal}</Moment>
          </td>
          <td label="Time">
            <Moment format="h:mm a">{eventDateLocal}</Moment>
          </td>
          <td label="Event Name">{name}</td>
          <td label="Venue">{venue.name}</td>

          <td label="Lowest Price">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(ticketInfo.minListPrice)}
          </td>
          <td label="Tickets Available">{ticketInfo.totalTickets}</td>
          <td>
            {ticketInfo.totalTickets > 0 && (
              <a href={`http://www.stubhub.com/${webURI}`}>Buy Tickets</a>
            )}
          </td>
        </tr>
      );
    });
  }

  render() {
    let events = [];
    return (
      <div id="tableContainer" class="container">
        <div id="eventsTable" class="table-responsive">
          <table class="table table-striped table-dark " id="events">
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
            <tbody>{this.renderTableData()}</tbody>
          </table>
          {this.state.btnClicked === true && this.state.events.length === 0 && (
            <p>No Results Found</p>
          )}
        </div>
      </div>
    );
  }
}

export default ShowTodaysEvents;
