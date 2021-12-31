import './Register.css';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Register = () => {    
    return ( 
        <div>
            <NavBar />
            <div className="registration-page">
                <div className="registration-selection">
                    <h1>Register as a...</h1>
                    <Link to="/company-registration" className="button-link">
                        <button className="register-button">Company</button>
                    </Link>
                    <Link to="/videocreator-registration" className="button-link">
                        <button className="register-button">Video Creator</button>
                    </Link>

                    <div className="link-wrapper">
                        <Link to="/login" className="goto-link">Already have an account? Click to login.</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Register;