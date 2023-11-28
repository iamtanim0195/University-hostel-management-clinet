import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
const MealDetails = () => {
    const meal = useLoaderData();
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={meal.image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{meal.title}</h2>
                <p>Distributor name:{meal.meal_distributor} </p>
                <p>Description:{meal.meal_description} </p>
                <p>Ingredients:{meal.ingredients} </p>
                <p>Post time:{meal.post_time} </p>
                <p>Rating:{meal.rating} </p>
                <p>Reviews:{meal.reviews[0].comment} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"> Meal request</button>
                    <button className="btn btn-primary"><AiOutlineLike />{meal.likes}</button>
                    <Link to={'/meals'}><button className="btn btn-primary">See All</button></Link>
                </div>
            </div>
        </div>
    );
}

export default MealDetails;