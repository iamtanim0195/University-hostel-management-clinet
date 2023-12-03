import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button"

const MealCard = ({ meal }) => {
    const { _id, title, image, rating, price, } = meal;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p className="text-2xl">Price:{price}</p>
                <div className="card-actions justify-end">
                    <div className="relative top-7 badge badge-outline ">rating:{rating}</div>
                    <Link to={`/mealsCategory/meal/${_id}`}> <div className="btn btn-primary">Details </div></Link>                </div>
            </div>
        </div>
    );
}
export default MealCard