import './VideoCreatorLogin.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VideoCreatorLogin = () => {
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const getVideoCreator = {
            email: email,
            password: password
        };

        let response = await axios.post(`http://localhost:3200/api/video-creator/login`, getVideoCreator);
        if (response.status === 200) {
            console.log(response.data);
            localStorage.setItem('token', response.data)
            window.location ='/videocreator/profile-setup';
        };

        if (response.status === 400) {
            console.log(response.error)
        }

    }
    

    return (  
        <div className="vc-login-page">
            <form className="vc-login-form" onSubmit={handleSubmit}>
                <h1 className="vc-form-heading">Video Creator Login</h1>
                <input type="text" placeholder="Email Address" value={email} onChange={(e) => getEmail(e.target.value)}/>
                <input type="text" placeholder="Password" value={password} onChange={(e) => getPassword(e.target.value)}/>
                <button className="vc-login-button" type="submit">Login</button>
                <div className="link-wrapper">
                    <Link to="/login" className="goto-link">Back to Login</Link>
                </div>
            </form>
        </div>
    );
}
 
export default VideoCreatorLogin;