import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import Loader from "../../../components/Shared/Loader";
import useAuth from "../../../hooks/useAuth";
import { getBookingInfo, savereqInfo } from "../../../api/booking";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const MealDetails = () => {
    const meal = useLoaderData();
    const { user, loading } = useAuth();
    const { data: booking = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings'],
        enabled: !loading,
        queryFn: async () => await getBookingInfo(),
    });
    console.log(booking[0]?.student?.email)
    const filteredBookings = booking.filter(book => book.student.email === user.email);
    console.log(filteredBookings[0]?.badge)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (filteredBookings[0]?.badge === 'Gold') {
            const reqInfo = {
                email: user.email,
                meal: meal?.title,
                likes: meal?.likes,
                reviews: meal?.reviews[0]?.comment,
                status: 'pending',
                date: new Date(),
            }
            try {
                await savereqInfo(reqInfo)
                toast.success('meal request is successful')
            } catch (error) {
                console.log(error.message)
                toast.error(error.message)
            }
            
        }else{
            toast.error('By a pack package ')
        }
    };
    if (isLoading) return <Loader />;
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
                <form onSubmit={handleSubmit} >
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"> Meal request</button>
                        <button className="btn btn-primary"><AiOutlineLike />{meal.likes}</button>
                        <Link to={'/meals'}><button className="btn btn-primary">See All</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MealDetails;