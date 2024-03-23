import React, { Component } from "react";
import Board from "./board";
import './newcss.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Board />
      </div>
    );
  }
}

export default App;
