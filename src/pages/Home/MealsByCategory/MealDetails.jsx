// components/MealDetails.js
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineLike } from 'react-icons/ai';
import Loader from '../../../components/Shared/Loader';
import useAuth from '../../../hooks/useAuth';
import { getBookingInfo, savereqInfo } from '../../../api/booking';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axiosSecure from '../../../api';

const MealDetails = () => {
    const meal = useLoaderData();
    const { user, loading } = useAuth();
    const { data: booking = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings'],
        enabled: !loading,
        queryFn: async () => await getBookingInfo(),
    });

    const [likes, setLikes] = useState(meal.likes || 0);
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState(meal.reviews || []);

    const filteredBookings = booking.filter((book) => book.student.email === user.email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (filteredBookings[0]?.badge === 'Gold') {
            try {
                // Update the likes and add the review in the database
                await axiosSecure.patch(`/mealsCategory/review/${meal._id}`, {
                    likes: likes + 1,
                    review: review,
                    UserEmail: user?.email
                });

                // Update the local state to reflect the change
                setLikes((prevLikes) => prevLikes + 1);
                setReviews([...reviews, { userId: user.id, review: review, date: new Date() }]);
                setReview(''); // Clear the review input
                toast.success('Review added successfully');
            } catch (error) {
                console.log(error.message);
                toast.error(error.message);
            }
        } else {
            toast.error('Buy a pack package');
        }
    };

    if (isLoading) return <Loader />;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src={meal.image} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{meal.title}</h2>
                <p>Distributor name:{meal.meal_distributor} </p>
                <p>Description:{meal.meal_description} </p>
                <p>Ingredients:{meal.ingredients} </p>
                <p>Post time:{meal.post_time} </p>
                <p>Rating:{meal.rating} </p>
                <h3>Reviews:</h3>
                <ul>
                    {reviews.map((review) => (
                        <li key={review.date}>
                            <strong>{review?.UserEmail}</strong>: {review?.review}                      
                        </li>
                    ))}
                </ul>
                {/* Review form */}
                {user ? (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="review">Your Review:</label>
                            <textarea
                                id="review"
                                className='border'
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit Review
                        </button>
                    </form>
                ) : (
                    <p>Login to leave a review.</p>
                )}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        <AiOutlineLike />
                        {likes}
                    </button>
                    <Link to={'/meals'}>
                        <button className="btn btn-primary">See All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;
