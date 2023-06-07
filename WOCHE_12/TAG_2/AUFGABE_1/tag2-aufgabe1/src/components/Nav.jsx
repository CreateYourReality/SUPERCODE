import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (  
        <nav>

            <NavLink className="imgLink" to="/"><img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="alttext" /></NavLink>
            <div>
                <NavLink to="/speisekarte">Speisekarte</NavLink>
                <NavLink to="/contact">Kontakt</NavLink>
                <NavLink to="/oeffnungszeiten">Öffnungszeiten</NavLink>
                <NavLink to="/galerie">Galerie</NavLink>
            </div>
        </nav>
    );
}
 
export default Nav;