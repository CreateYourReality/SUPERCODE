import { NavLink } from "react-router-dom"
import { useState, useEffect} from "react"



const Home = () => {
    const APIKEY = "b49d67a78fb04e0b927c43baa1801e78";
    const [superData, setData] = useState("")

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`)
          .then((response) => response.json())
          .then((superData) => {
            setData(superData);
          })
          .catch((error) => {
            console.log("Fehler beim laden", error);
          });
    
        console.log(
          "Pizzacouter wurde gändert darum wird useEffect nochmal ausgeführt"
        );
        // Wenn die [] leer sind, wird das nur 1x beim laden der seite asugeführt
      }, []);


    return (
        <main>
            <h1>NEWSPAPER</h1>
            {superData ? (
        <section>
          {superData.articles.map((schinken, index) => (
            <div className="news-item" key={index}>
              <img src={schinken.urlToImage} alt={schinken.title} />
              <p>{schinken.title}</p>
              <NavLink to={`/detail/${index}`}>READ ARTICLE</NavLink>
            </div>
          ))}
        </section>
      ) : (
        <p>Daten werden geladen ...</p>
      )}

        </main>
      );
}
 
export default Home;

