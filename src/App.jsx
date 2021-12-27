import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import HireVCSection from './components/HireVCSection/HireVCSection';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FeaturedSection />
        <HireVCSection />
      </div>
    )
  }
}

export default App;
