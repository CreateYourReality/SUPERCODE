import Header from "../components/Header";
import { Link, NavLink } from "react-router-dom";
const Home = () => {
    return (  
        <>
            <Header/>
            <main>
                <h2>Welcome to my simple Blog</h2>
                <NavLink to="/blog">Go to articles</NavLink>
            </main>
        </>
    );
}
 
export default Home;