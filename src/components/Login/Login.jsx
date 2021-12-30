import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (  
        <div className="login-page">
            <div className="login-selection">
                <h1>Login in as a...</h1>
                <Link to="/company-login" className="button-link">
                    <button className="login-button">Company</button>
                </Link>
                
                <Link to="/videocreator-login" className="button-link">
                    <button className="login-button">Video Creator</button>
                </Link>
                
                <div className="link-wrapper">
                    <Link to="/" className="goto-link">Go Back to Home</Link>
                    {' | '}
                    <Link to="/register" className="goto-link">Create an Account</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Login;