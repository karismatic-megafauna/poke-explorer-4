import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';
import Cell from './Cell';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cell />
      </div>
    );
  }
}

export default App;
