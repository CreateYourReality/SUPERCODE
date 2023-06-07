import { Link, NavLink } from "react-router-dom";
const Article = (probs) => {
    let newProbs = {
         title: probs.title,
         autor: probs.author,
         desc: probs.description
        }
    const objString = JSON.stringify(newProbs);    
    let href = "/detail/" + probs
    console.log(probs);
    return (  
        <article>
            <img src="" alt="" />
            <h2>{probs.title}</h2>

            <NavLink to={href}>Read More</NavLink>

            <NavLink to={`/detail?obj=${encodeURIComponent(objString)}`
            }>Read more</NavLink>
        </article>
    );
}
 
export default Article;