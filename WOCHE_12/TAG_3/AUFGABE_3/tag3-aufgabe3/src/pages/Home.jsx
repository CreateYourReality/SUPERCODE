import { NavLink } from "react-router-dom"
import { useState, useEffect} from "react"

const Home = () => {
    const APIKEY = "b49d67a78fb04e0b927c43baa1801e78";
    const [superData, setData] = useState("")
    const [country, setCountry] = useState("us")
    const [keyword, setKeyword] = useState("")
    const [input, setInput] = useState("")

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?q=${keyword}&country=${country}&apiKey=${APIKEY}`)
          .then((response) => response.json())
          .then((superData) => {
            setData(superData);
          })
          .catch((error) => {
            console.log("Fehler beim laden", error);
          });
    
        console.log(
          "country wurde gändert darum wird useEffect nochmal ausgeführt"
        );
        // Wenn die [] leer sind, wird das nur 1x beim laden der seite asugeführt
      }, [country,keyword]);


      const changeCountry = () => {
        setCountry(event.target.value);
      }
      
      const changeInput = () => {
        setInput(event.target.value);
      }

      const changeKeyword = () => {
        event.preventDefault();
        setKeyword(input);
      }

    return (
        <main>
            <h1>NEWSPAPER</h1>
            <form>
                <select onChange={changeCountry} id="country">
                    <option value="us">USA</option>
                    <option value="de">GER</option>
                </select>
                <input id="keyword" type="text" onChange={changeInput}/>
                <input onClick={changeKeyword} type="submit" />
            </form>
            {superData ? (
        <section>
          {superData.articles.map((schinken, index) => (
            <div className="news-item" key={index}>
              <img src={schinken.urlToImage} alt={schinken.title} />
              <p>{schinken.title}</p>
              <NavLink to={`/detail/${index}/${country}/${keyword}`}>READ ARTICLE</NavLink>
            </div>
          ))}
        </section>
      ) : (
        <p>Zeitungsartikel werden geladen ...</p>
      )}

        </main>
      );
}
 
export default Home;

