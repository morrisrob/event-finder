import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ShowTodaysEvents from "./components/ShowTodaysEvents";
import MainPage from "./components/MainPage";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <div className="App">
      <PageContainer />
      {/* <ShowTodaysEvents /> */}
    </div>
  );
}

export default App;
