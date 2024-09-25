import './navbar.css'

function Navbar(){
    function removeJwt(){
        localStorage.removeItem('JWT');
    }
    return(
        <>
        <div className="navbar-container">
            <div className="navbar-item-container">
            <a href='/' className="navbar-item">Home</a>
            <a href='/add-employ' className="navbar-item">Add-Employs</a>
            <a href='/employs-list' className="navbar-item">Employs List</a>
            </div>
            <div className="navbar-logout-container">
                <a href='' onClick={removeJwt} className="navbar-logout-item" >logout</a>
            </div>
        </div>
        </>
    )
}

export default Navbar;