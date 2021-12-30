import './CompanyLogin.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CompanyLogin = () => {
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const getCompany = {
            email: email,
            password: password,
        };

        console.log(getCompany)

        let response = await axios.post(`http://localhost:3200/api/company/login`, getCompany);
        if (response.status === 200) {
            console.log(response.data);
            localStorage.setItem('token', response.data)
            window.location ='/';
        };

        if (response.status === 400) {
            console.log(`There is an error: ${response.error}`)
        }

    }

    return (  
        <div className="company-login-page">
            <form className="company-login-form" onSubmit={handleSubmit}>
                <h1 className="company-form-heading">Company Login</h1>
                <input type="text" placeholder="Email Address" value={email} onChange={(e) => getEmail(e.target.value)}/>
                <input type="text" placeholder="Password" value={password} onChange={(e) => getPassword(e.target.value)}/>
                <button className="company-login-button" type="submit">Login</button>
                <div className="link-wrapper">
                    <Link to="/login" className="goto-link">Back to Login</Link>
                </div>
            </form>
        </div>
    );
}
 
export default CompanyLogin;