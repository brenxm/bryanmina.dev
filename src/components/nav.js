import NavButton from "./button";
import { Outlet, Link } from "react-router-dom";


function NavBar(){
    return (
        <>
        <div className="nav-bar">
            <div className="btn-container">
                <Link id="nav-btn"to="/">About</Link>
                <Link id="nav-btn"to="/projects">Projects</Link>
                <Link id="nav-btn"to="/contactme">Contact me</Link>
            </div>
        </div>
        <Outlet />
        </>
        )
}


export default NavBar;