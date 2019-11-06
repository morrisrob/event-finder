import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';
import TodaysEvents from './components/TodaysEvents';
import ShowTodaysEvents from './components/ShowTodaysEvents';
import TopNavbar from './components/TopNavbar';
import SearchForm from './components/SearchForm';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <ShowTodaysEvents />
    </div>
  );
}

export default App;
