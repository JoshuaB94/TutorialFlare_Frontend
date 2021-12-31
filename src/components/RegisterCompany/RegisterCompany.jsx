import './RegisterCompany.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterCompany = () => {
    const [company, registerCompany] = useState("");
    const [email, registerEmail] = useState("");
    const [password, registerPassword] = useState("");

    async function handleSubmit(e){
        e.preventDefault();

        const postCompany = {
            company: company,
            email: email,
            password: password,
            isAdmin: true
        }

        let response = await axios.post(`http://localhost:3200/api/company/register`, postCompany);
        if (response.status === 200) {
            console.log(response.data);
            window.location = '/login';
        }

        if (response.status === 400) {
            console.log(`There is an error: ${response.error}`)
        }
    }

    return ( 
        <div className="company-registration-page">
            <form className="company-registration-form" onSubmit={handleSubmit}>
                <h1>Register as a Company</h1>
                <input placeholder="Your Company Name" type="text" value={company} onChange={(e) => registerCompany(e.target.value)}/>
                <input placeholder="Email Address" type="text" value={email} onChange={(e) => registerEmail(e.target.value)}/>
                <input placeholder="Enter a Password" type="text" value={password} onChange={(e) => registerPassword(e.target.value)}/>
                <button className="company-register-button" type="submit">Register</button>
            </form>
        </div>
     );
}
 
export default RegisterCompany;