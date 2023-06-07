import Nav from "./Nav";
const Header = (probs) => {
    return (  
        <header>
            <Nav/>
            <h1>{probs.text}</h1>
        </header>
    );
}
 
export default Header;