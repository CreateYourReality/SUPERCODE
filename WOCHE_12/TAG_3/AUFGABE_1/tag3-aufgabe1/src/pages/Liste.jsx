import allCars from "../components/cars.json"
import { NavLink } from "react-router-dom"

const Liste = () => {


    return (  
        <section className="grid">
       {allCars?.map((elm, index) => {
            return (
                <div className="grid-item" key={index}>
                    <p>{elm.carModel}</p>
                    <p>{elm.CarMake}</p>
                    <p>{elm.CarYear}</p>
                    <NavLink to={`/detail/${elm.id}`}>READ MORE</NavLink>
                </div>
            )
        })
    }
        </section>
    );
}
 
export default Liste;