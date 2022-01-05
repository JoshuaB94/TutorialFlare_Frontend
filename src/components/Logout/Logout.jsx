const Logout = ({setUser}) => {
    const logoutLink = () => {
        localStorage.removeItem('token');
        setUser(null);
        window.location.assign("/");
    }

    return ( 
        <div onClick={() => logoutLink()}>Logout</div>
     );
}
 
export default Logout;