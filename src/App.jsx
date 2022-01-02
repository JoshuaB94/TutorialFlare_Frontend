import './App.css';
import React, { Component } from 'react';
// import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import VideoCreatorLogin from './components/VideoCreatorLogin/VideoCreatorLogin';
import CompanyLogin from './components/CompanyLogin/CompanyLogin';
import Register from './components/Register/Register';
import RegisterCompany from './components/RegisterCompany/RegisterCompany';
import RegisterVideoCreator from './components/RegisterVideoCreator/RegisterVideoCreator';
import VideoCreatorProfile from './components/VideoCreatorProfile/VideoCreatorProfile';
import CompanyProfile from './components/CompanyProfile/CompanyProfile';
import HireMeForm from './components/HireMeForm/HireMeForm';
import VCProfileSetup from './components/VCProfileSetup/VCProfileSetup';
import CoProfileSetup from './components/CoProfileSetup/CoProfileSetup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

class App extends Component {
  state =  {
    company: "",
    videocreator: ""
  }

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try {
      const company = jwtDecode(jwt);
      this.setState({company});
      const videocreator = jwtDecode(jwt);
      this.setState({videocreator});
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
          <Route path="company-registration" element={<RegisterCompany />}/>
          <Route path="videocreator-registration" element={<RegisterVideoCreator />}/>
          <Route path="videocreator/profile" element={<VideoCreatorProfile />}/>
          <Route path="company/profile" element={<CompanyProfile />}/>
          <Route path="hiremeform" element={<HireMeForm />}/>
          <Route path="videocreator/profile-setup" element={<VCProfileSetup />}/>
          <Route path="company/profile-setup" element={<CoProfileSetup />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
