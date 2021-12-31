const Logout = () => {
    const logoutLink = () => {
        localStorage.removeItem('token');
        window.location.assign("/");
    }

    return ( 
        <div onClick={() => logoutLink()}>Logout</div>
     );
}
 
export default Logout;