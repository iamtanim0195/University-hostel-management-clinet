import { Helmet } from "react-helmet-async";
import AddMealForm from "../../../components/Form/AddMealForm";

const AddMeal = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <Helmet>
                <title>Add Meal || Dashboard</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <AddMealForm
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default AddMeal;