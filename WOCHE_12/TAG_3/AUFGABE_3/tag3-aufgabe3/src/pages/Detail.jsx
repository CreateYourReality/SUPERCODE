import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Detail = () => {
    const idParams = useParams();
    const APIKEY = "b49d67a78fb04e0b927c43baa1801e78";
    const [superData, setData] = useState("");

    console.log(idParams);

    const country = useParams().country;
    const keyword = useParams().keyword

    console.log("keyword",keyword);

    useEffect(() => {
        console.log(keyword);
        if(keyword != undefined){
            fetch(`https://newsapi.org/v2/top-headlines?q=${keyword}&country=${country}&apiKey=${APIKEY}`)
            .then((response) => response.json())
            .then((superData) => {
              setData(superData);
            })
            .catch((error) => {
              console.log("Fehler beim laden", error);
            });
      
          console.log(
            "fetch,  darum wird useEffect (nochmal) ausgeführt"
          )
        }else
            fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${APIKEY}`)
        
          .then((response) => response.json())
          .then((superData) => {
            setData(superData);
          })
          .catch((error) => {
            console.log("Fehler beim laden", error);
          });
    
        console.log(
          "fetch,  darum wird useEffect (nochmal) ausgeführt"
        );
        // Wenn die [] leer sind, wird das nur 1x beim laden der seite asugeführt
      }, []);


      const currentNewsID = Number(idParams.newsID);

    return (  
        <article>
              {superData ? (
        <>
          {superData.articles.map((schinken, index) => {
            if(index === currentNewsID){
                return (
                <div className="news-item" key={index}>
                    <img src={schinken.urlToImage} alt={schinken.title} />
                    <p>{schinken.title}</p>
                    <p>{schinken.author}</p>
                    <p>{schinken.description}</p>
                    <p>{schinken.publishedAt}</p>
                    <a href={schinken.url}>LINK TO ARTICLE</a>
                </div>
                )
            }
          }   
          )}
        </>
      ) : (
        <p>Daten werden geladen ...</p>
      )}
      
        </article>
    );
}
 
export default Detail;