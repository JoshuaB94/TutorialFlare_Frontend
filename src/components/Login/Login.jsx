import './Login.css';
import FormInput from '../FormInput/FormInput';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");
    const [company, getCompany] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const getCompany = {
            company: company,
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
        <form className="login-form" onSubmit={handleSubmit}>
            <FormInput name="company" placeholder="Company Name"/>
            <FormInput name="email" placeholder="Email Address"/>
            <FormInput name="password " placeholder="Password"/>
            <button>Login</button>
        </form>
    );
}
 
export default Login;