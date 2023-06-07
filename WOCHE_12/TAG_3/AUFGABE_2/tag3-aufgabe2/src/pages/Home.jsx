import Header from "../components/Header"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"

const Home = () => {
    const [superData, setSuperData] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
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
        }, [superData]);

    return (  
        <>
            <Header />
            <h2>HOME</h2>

            {superData ? (
        <main>
          {superData.map((schinken, index) => (
            <div className="shop-item" key={index}>
              <p>{schinken.title}</p>
              <img src={schinken.image} alt="" />
              <NavLink to={`/detail/${schinken.id}`}>READ MORE</NavLink>
            </div>
          ))}
        </main>
      ) : (
        <p>Daten werden geladen ...</p>
      )}
        </>
    );
}
 
export default Home;