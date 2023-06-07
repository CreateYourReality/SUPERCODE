import { NavLink } from "react-router-dom";

const Home = () => {
    return (  
        <main>
            <h1>DIE GROßE AUTOLISTE</h1>
            <NavLink to="/liste">TO LIST</NavLink>
        </main>
    );
}
 
export default Home;