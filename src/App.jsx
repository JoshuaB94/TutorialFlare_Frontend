import './App.css';
import React, { Component } from 'react';
// import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import VideoCreatorLogin from './components/VideoCreatorLogin/VideoCreatorLogin';
import CompanyLogin from './components/CompanyLogin/CompanyLogin';
import Register from './components/Register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

class App extends Component {
  state =  {
    company: ""
  }

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try {
      const company = jwtDecode(jwt);
      this.setState({company})
    } catch {

    }
  }

  render() {
    return (
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="login" element={<Login />}/>
          <Route path="company-login" element={<CompanyLogin />}/>
          <Route path="videocreator-login" element={<VideoCreatorLogin />}/>
          <Route path="register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
