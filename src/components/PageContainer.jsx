import React, { Component } from 'react';

import MainPage from "./MainPage";
import ShowTodaysEvents from './ShowTodaysEvents';

class PageContainer extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            btnClicked: false,
            whichButton: '',
            searchString: ''
        };
    }

    handler(whichButton, searchString) {
        this.setState({
            btnClicked: true,
            searchString: searchString,
        });
        if (whichButton === 'todaysEvents') {
            this.setState({
                whichButton: 'todaysEvents'
            })
        } else {
            this.setState({
                whichButton: 'search'
            })
        }
        console.log('btnClicked!')
    }

    render() { 
        let btnState = 'today';
        return (  
            <div>
                <MainPage action={this.handler}/>
                {this.state.btnClicked === true &&
                    <ShowTodaysEvents whichButton={this.state.whichButton} searchString={this.state.searchString}/>
                }   
            </div>
        );
    }
}
 
export default PageContainer;