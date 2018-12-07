import React, {Component} from 'react';
/* eslint no-undef: "off"*/
import logo from './logo.svg';
import './App.css';
import SynthOne from './audioComponents/synths/SynthOne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SynthOne/>
      </div>
    );
  }
}

export default App;