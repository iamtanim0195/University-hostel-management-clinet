import { Helmet } from "react-helmet-async";
import AddMealForm from "../../../components/Form/AddMealForm";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { addMeal, addUpComingMeals } from "../../../api/mealCategory";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddMeal = () => {
    const navigate = useNavigate();
    const { user } = useAuth
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');  // Fix the use of useState
    const [actionType, setActionType] = useState(null);
    const handleButtonClick = (type) => {
        setActionType(type);
    };
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target
        const category = form.category.value
        const ingredients = form.ingredients.value
        const time = form.time.value
        const distributor_name = form.distributor_name.value
        const distributor_email = form.distributor_email.value
        const title = form.title.value
        const price = form.price.value
        const rating = form.rating.value
        const reviews = form.reviews.value
        const likes = form.likes.value
        const description = form.description.value
        const image = form.image.files[0]
        const distributor = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }
        const image_url = await imageUpload(image);
        const mealData = {
            category,
            ingredients,
            time,
            distributor_name,
            distributor_email,
            title,
            price,
            rating,
            reviews,
            likes,
            description,
            distributor,
            image: image_url?.data?.display_url,
        }
        if (actionType === 'addMeal') {
            try {
                setLoading(true);
                const data = await addMeal(mealData);
                setUploadButtonText('!Upload');
                toast.success('Meal Added');
                navigate('/dashboard/all-meals');
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        } else if (actionType === 'addToUpcoming') {
            try {
                setLoading(true);
                const data = await addUpComingMeals(mealData);
                setUploadButtonText('!Upload');
                toast.success('Meal Added to up coming');
                navigate('/dashboard/all-meals');
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        // Reset actionType or perform any other necessary cleanup
        setActionType(null);
    };
    // handle image button text
    const handleImageChange = (image) => {
        setUploadButtonText(image?.name);
    }
    return (
        <div>
            <Helmet>
                <title>Add Meal || Dashboard</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <AddMealForm
                handleSubmit={handleSubmit}
                handleImageChange={handleImageChange}
                loading={loading}
                uploadButtonText={uploadButtonText}
                handleButtonClick={handleButtonClick}
            />
        </div>
    );
}

export default AddMeal;