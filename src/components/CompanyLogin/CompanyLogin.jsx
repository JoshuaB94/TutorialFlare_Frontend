import './CompanyLogin.css';
import FormInput from '../FormInput/FormInput';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VideoCreatorLogin from '../VideoCreatorLogin/VideoCreatorLogin';

const CompanyLogin = () => {
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const getCompany = {
            emailAddress: email,
            password: password
        };

        let response = await axios.post(`http://localhost:3200/api/company/login`, getCompany);
        if (response.status === 200) {
            console.log(response.data);
            localStorage.setItem('token', response.data)
            window.location ='/';
        };

        if (response.status === 400) {
            console.log(response.error)
        }

    }
    

    return (  
        <div className="company-login-page">
            <form className="company-login-form" onSubmit={handleSubmit}>
                <h1 className="company-form-heading">Company Login</h1>
                <FormInput name="email" placeholder="Email Address"/>
                <FormInput name="password " placeholder="Password"/>
                <button className="company-login-button">Login</button>
                <Link to="/videocreator-login">Video Creator Login</Link>
            </form>
        </div>
        
    );
}
 
export default CompanyLogin;