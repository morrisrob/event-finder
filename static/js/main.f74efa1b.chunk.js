(this["webpackJsonpevent-finder"]=this["webpackJsonpevent-finder"]||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),s=n.n(c),i=(n(16),n(17),n(18),n(1)),l=n(2),o=n(4),h=n(3),u=n(5),d=n(7),m=n.n(d),v=(n(20),n(9)),b=n(21),E="https://api.stubhub.com/sellers/search/events/v3?state=WI&rows=50&parking=false",f={Authorization:"Bearer mYTy3Gb8J4uYkSCs7ioVCvZJiqTF",Accept:"application/json"},p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(h.a)(t).call(this,e))).searchHandler=function(e){n.setState.btnClicked=!0,b("".concat(E,"&q=").concat(e),{headers:f}).then((function(e){return e.json()})).then((function(e){n.setState({events:e.events})}))},n.showTodaysEvents=function(e){n.setState({btnClicked:!0});var t=v(),a=v(t).add(1,"d");b("".concat(E,"&dateLocal=").concat(t.format("YYYY-MM-DD")," TO ").concat(a.format("YYYY-MM-DD")),{headers:f}).then((function(e){return e.json()})).then((function(e){n.setState({events:e.events})}))},n.myChangeHandler=function(e){n.setState({eventSearch:e.target.value})},n.state={events:[],eventSearch:"",btnClicked:!1,show:!1,updated:!1,whichButton:"",searchString:""},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(e){this.setState({whichButton:this.props.whichButton,searchString:this.props.searchString}),"todaysEvents"===this.props.whichButton?this.showTodaysEvents():this.searchHandler(this.props.searchString)}},{key:"componentWillReceiveProps",value:function(e){"todaysEvents"===e.whichButton?this.showTodaysEvents():this.searchHandler(e.searchString),this.setState({updated:!0})}},{key:"renderTableData",value:function(){return this.state.events.sort((function(e,t){return e.eventDateLocal>t.eventDateLocal?1:-1})),this.state.events.map((function(e,t){var n=e.id,a=e.name,c=e.eventDateLocal,s=e.venue,i=e.webURI,l=e.ticketInfo;return r.a.createElement("tr",{key:n},r.a.createElement("td",{label:"Date"},r.a.createElement(m.a,{format:"ddd, MMM Do"},c)),r.a.createElement("td",{label:"Time"},r.a.createElement(m.a,{format:"h:mm a"},c)),r.a.createElement("td",{label:"Event Name"},a),r.a.createElement("td",{label:"Venue"},s.name),r.a.createElement("td",{label:"Lowest Price"},new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(l.minListPrice)),r.a.createElement("td",{label:"Tickets Available"},l.totalTickets),r.a.createElement("td",null,l.totalTickets>0&&r.a.createElement("a",{href:"http://www.stubhub.com/".concat(i)},"Buy Tickets")))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"tableContainer",class:"container"},r.a.createElement("div",{id:"eventsTable",class:"table-responsive"},r.a.createElement("table",{class:"table table-striped table-dark ",id:"events"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"Event Name"),r.a.createElement("th",null,"Venue"),r.a.createElement("th",null,"Lowest Price"),r.a.createElement("th",null,"Tickets Available"))),r.a.createElement("tbody",null,this.renderTableData())),!0===this.state.btnClicked&&0===this.state.events.length&&r.a.createElement("p",null,"No Results Found")))}}]),t}(a.Component),w=(n(22),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(h.a)(t).call(this,e))).myChangeHandler=function(e){n.setState({eventSearch:e.target.value})},n.state={eventSearch:""},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{id:"pageTitle"},r.a.createElement("div",{id:"mainText"},r.a.createElement("h1",null,"Wisconsin Ticket Finder"),r.a.createElement("p",null,"StubHub Event Search"))),r.a.createElement("div",{id:"search"},r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("div",{id:"searchForm"},r.a.createElement("input",{id:"searchBox",type:"text",class:"form-rounded",onChange:this.myChangeHandler}))),r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("button",{id:"searchBtn",class:"btn btn-sm btn-primary",onClick:function(){return e.props.action("search",e.state.eventSearch)}}," ","Search"," "),r.a.createElement("button",{class:"btn btn-sm btn-primary",onClick:function(){return e.props.action("todaysEvents")}}," ","Show Today's Events"," "))))}}]),t}(a.Component)),y=n(6),S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(h.a)(t).call(this,e))).handler=n.handler.bind(Object(y.a)(n)),n.state={btnClicked:!1,whichButton:"",searchString:""},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handler",value:function(e,t){this.setState({btnClicked:!0,searchString:t}),"todaysEvents"===e?this.setState({whichButton:"todaysEvents"}):this.setState({whichButton:"search"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,{action:this.handler}),!0===this.state.btnClicked&&r.a.createElement(p,{whichButton:this.state.whichButton,searchString:this.state.searchString}))}}]),t}(a.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.f74efa1b.chunk.js.map