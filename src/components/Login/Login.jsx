import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (  
        <div className="login-page">
            <div className="login-selection">
                <h1>Login in as a...</h1>
                <button className="login-button">
                    <Link to="/company-login" className="button-link">Company</Link>
                </button>
                <button className="login-button">
                    <Link to="/videocreator-login" className="button-link">Video Creator</Link>
                </button>
                <div className="link-wrapper">
                    <Link to="/" className="goto-link">Go Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Login;