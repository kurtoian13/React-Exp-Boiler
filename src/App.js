import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter !!</h1>
          <p>I created this with help from  <a id="course-link" href="https://www.youtube.com/watch?v=v0t42xBIYIs">Brad Traversy's tutorial</a></p>
        </header>
        <Customers />
      </div>
    );
  }
}

export default App;
