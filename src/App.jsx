import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
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
import ClientPortal from './components/ClientPortal/ClientPortal';
import VideoUploadForm from './components/VideoUploadForm/VideoUploadForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const jwt = localStorage.getItem('token');
        try {
          setUser(jwtDecode(jwt));
        } catch (error) {
          console.log(error);
        }
    }, [])

    return (
      <BrowserRouter> 
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="login" element={<Login />}/>
          <Route path="company-login" element={<CompanyLogin />}/>
          <Route path="videocreator-login" element={<VideoCreatorLogin />}/>
          <Route path="register" element={<Register />}/>
          <Route path="company-registration" element={<RegisterCompany />}/>
          <Route path="videocreator-registration" element={<RegisterVideoCreator />}/>
          <Route path="videocreator/profile" element={<VideoCreatorProfile {...user} isCreator={true}/>}/>
          <Route path="company/profile" element={<CompanyProfile {...user} isCompany={true}/>}/>
          <Route path="hiremeform" element={<HireMeForm isCompany={true}/>}/>
          <Route path="videocreator/profile-setup" element={<VCProfileSetup isCreator={true}/>}/>
          <Route path="company/profile-setup" element={<CoProfileSetup isCompany={true}/>}/>
          <Route path="videocreator/upload" element={<VideoUploadForm {...user}/>}/>
          <Route path="client-portal" element={<ClientPortal />}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
