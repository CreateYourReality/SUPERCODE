import Nav from "../components/Nav";
import {useParams} from "react-router-dom"


const Detail = () => {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)

    return ( 
        <>
            <Nav />
            <section>
                <h3>{thisProduct.title}</h3>
                <h2>{thisProduct.autor}</h2>
                <p>{thisProduct.desc}</p>
            </section>
        </>
     );
}
 
export default Detail;