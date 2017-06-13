import React, { Component } from 'react';
import './App.css';
import Cell from './Cell';
import PokeObjects from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> {JSON.stringify(PokeObjects)} </p>
        <Cell name='squirtle' id={7} sprite='url'/>
      </div>
    );
  }
}

export default App;
