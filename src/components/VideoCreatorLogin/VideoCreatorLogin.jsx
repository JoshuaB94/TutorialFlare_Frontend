import './VideoCreatorLogin.css';
import FormInput from '../FormInput/FormInput';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VideoCreatorLogin = () => {
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const getVideoCreator = {
            emailAddress: email,
            password: password
        };

        let response = await axios.post(`http://localhost:3200/api/video-creator/login`, getVideoCreator);
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
        <div className="vc-login-page">
            <form className="vc-login-form" onSubmit={handleSubmit}>
                <h1 className="vc-form-heading">Video Creator Login</h1>
                <FormInput name="email" placeholder="Email Address"/>
                <FormInput name="password " placeholder="Password"/>
                <button className="vc-login-button">Login</button>
                <Link to="/company-login">Company Login</Link>
            </form>
        </div>
        
    );
}
 
export default VideoCreatorLogin;