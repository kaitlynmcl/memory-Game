import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";

import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav 
         title="Coffee Brain: Memory Game">
        </Nav>
          <Jumbotron />
            

      </div>
    );
  }
}

export default App;
