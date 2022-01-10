import './RegisterVideoCreator.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterVideoCreator = () => {
    const [name, registerName] = useState("");
    const [email, registerEmail] = useState("");
    const [password, registerPassword] = useState("");
    const [image, registerImage] = useState("");

    async function handleSubmit(e){
        e.preventDefault();

        const postVideoCreator = {
            name: name,
            email: email,
            password: password,
            isCreator: true,
            image: image
        }

        let response = await axios.post(`http://localhost:3200/api/video-creator/register`, postVideoCreator);
        if (response.status === 200) {
            console.log(response.data);
            window.location = '/videocreator-login';
        }

        if (response.status === 400) {
            console.log(`There is an error: ${response.error}`)
        }
    }

    return ( 
        <div className="vc-registration-page">
            <form className="vc-registration-form" onSubmit={handleSubmit} enctype="multipart/form-data">
                <h1 className="vc-registration-heading">Register as a Video Creator</h1>
                <input placeholder="Full Name" type="text" value={name} onChange={(e) => registerName(e.target.value)}/>
                <input placeholder="Email Address" type="text" value={email} onChange={(e) => registerEmail(e.target.value)}/>
                <input placeholder="Enter a Password" type="text" value={password} onChange={(e) => registerPassword(e.target.value)}/>
                <label for="imagefile">Select an image:</label>
                <input type="file" id="imagefile" value={image} onChange={(e) => registerImage(e.target.value)}/>
                <button className="vc-register-button" type="submit">Register</button>
                <div className="link-wrapper">
                    <Link to="/videocreator-login" className="goto-link">Already have an account? Click to login.</Link>
                </div>
            </form>
        </div>
     );
}
 
export default RegisterVideoCreator;