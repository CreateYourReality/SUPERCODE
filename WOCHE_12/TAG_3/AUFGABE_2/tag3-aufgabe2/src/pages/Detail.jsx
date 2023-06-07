import Header from "../components/Header"
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";


const Detail = () => {
    const [superData, setSuperData] = useState("")
    const idParams = useParams();

            useEffect(() => {
                fetch(`https://fakestoreapi.com/products/${idParams.productID}`)
                  .then((response) => response.json())
                  .then((superData) => {
                    setSuperData(superData);
                  })
                  .catch((error) => {
                    console.log("Fehler beim laden", error);
                  });
                  console.log(
                    "superData wurde gändert darum wird useEffect nochmal ausgeführt"
                  );
                  // Wenn die [] leer sind, wird das nur 1x beim laden der seite asugeführt
                }, []);

    return ( 
        <>
            <Header/>
            <article>
                <h2>Detailansicht</h2>
                <h2>{superData.title}</h2>
                <img src={superData.image} alt={superData.title} />
                <h2>{superData.description}</h2>
                <h2>{superData.price}</h2>
            </article>
        </>
     );
}
 
export default Detail;

