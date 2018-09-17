import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
      
    return <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>Comcast UI Code Exercise</h2>
        </div>
        <p className="App-intro"></p>
        <nav />
        {this.props.children}
      </div>;
  }
}

export default App;
