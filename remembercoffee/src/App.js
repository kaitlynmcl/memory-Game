import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
          <Jumbotron />
            

      </div>
    );
  }
}

export default App;
