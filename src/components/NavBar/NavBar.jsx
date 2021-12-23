import './NavBar.css'

const NavBar = () => {
    return ( 
        <div className="main-navbar">
            <div className="logo">
                <h1>Logo Goes Here</h1>
            </div>
            <nav className="navbar-menu">
                <a href="#home">Home</a>
                <a href="#menu-item">Menu Item</a>
                <a href="#menu-item">Menu Item</a>
                <a href="#login-register">Login/Register</a>
            </nav>
        </div>
     );
}
 
export default NavBar;