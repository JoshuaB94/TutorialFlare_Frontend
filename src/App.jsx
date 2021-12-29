import './App.css';
import React, { Component } from 'react';
// import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import VideoCreatorLogin from './components/VideoCreatorLogin/VideoCreatorLogin';
import CompanyLogin from './components/CompanyLogin/CompanyLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="login" element={<Login />}/>
          <Route path="company-login" element={<CompanyLogin />}/>
          <Route path="videocreator-login" element={<VideoCreatorLogin />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
