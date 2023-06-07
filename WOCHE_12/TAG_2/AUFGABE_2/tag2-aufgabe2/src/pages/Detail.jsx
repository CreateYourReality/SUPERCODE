import Nav from "../components/Nav";
import { useLocation} from "react-router-dom"


const Detail = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const objString = searchParams.get('obj');
    const obj = JSON.parse(objString);

    return ( 
        <>
            <Nav />
            <section>
                <h3>{obj.title}</h3>
                <h2>{obj.autor}</h2>
                <p>{obj.desc}</p>
            </section>
        </>
     );
}
 
export default Detail;