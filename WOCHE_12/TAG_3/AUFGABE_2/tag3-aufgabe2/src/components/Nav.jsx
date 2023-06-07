import {NavLink} from "react-router-dom"

const Nav = () => {
    return (  
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Kontakt</NavLink>
        </nav>
    );
}
 
export default Nav;