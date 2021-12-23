import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HomePage />
      </div>
    )
  }
}

export default App;
