import { useParams } from "react-router-dom";
import allCars from "../components/cars.json"

const Detail = () => {
    const idParam = useParams();
    
    const detailCar = allCars.filter((elm) => {
        return elm.id.toString() === idParam.carID;
      });

    return (  
        <section>
            <h2>{detailCar[0].carModel}</h2>
            <p>{detailCar[0].CarMake}</p>
            <p>{detailCar[0].CarYear}</p>
        </section>
    );
}
 
export default Detail;