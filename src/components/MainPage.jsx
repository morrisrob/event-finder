import React, { Component } from "react";
import "./MainPage.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventSearch: ""
    };
  }

  myChangeHandler = event => {
    this.setState({ eventSearch: event.target.value });
  };

  render() {
    return (
      <div>
        <div id="pageTitle">
          <div id="mainText">
            <h1>Wisconsin Ticket Finder</h1>
            <p>StubHub Event Search</p>
          </div>
        </div>
        <div id="search">
          <div class="row justify-content-center">
            <div id="searchForm">
              <input
                id="searchBox"
                type="text"
                class="form-rounded"
                onChange={this.myChangeHandler}
              />
            </div>
          </div>
          <div class="row justify-content-center">
            <button
              id="searchBtn"
              class="btn btn-sm btn-primary"
              onClick={() =>
                this.props.action("search", this.state.eventSearch)
              }
            >
              {" "}
              Search{" "}
            </button>

            <button
              class="btn btn-sm btn-primary"
              onClick={() => this.props.action("todaysEvents")}
            >
              {" "}
              Show Today's Events{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;