import { useLoaderData} from "react-router-dom";

const MealDetails = () => {
    const meal = useLoaderData();
    return (
        <div>{meal.title}</div>
    );
}

export default MealDetails;