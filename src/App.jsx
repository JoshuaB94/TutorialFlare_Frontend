import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import HireVCSection from './components/HireVCSection/HireVCSection';
import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Login />
        {/* <FeaturedSection /> */}
        {/* <HireVCSection /> */}
      </div>
    )
  }
}

export default App;
