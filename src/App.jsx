import './App.css';
import React, { Component } from 'react';
// import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import VideoCreatorLogin from './components/VideoCreatorLogin/VideoCreatorLogin';
import CompanyLogin from './components/CompanyLogin/CompanyLogin';
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
    const company = this.state.company;
    return (
      <BrowserRouter> 
      {console.log("Company", company)}
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
