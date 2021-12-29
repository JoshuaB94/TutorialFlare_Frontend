import './App.css';
import React, { Component } from 'react';
// import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
