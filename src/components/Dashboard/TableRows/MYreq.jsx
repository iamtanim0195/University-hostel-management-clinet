import { useQuery } from "@tanstack/react-query";
import { getmealByCategory } from "../../../api/mealCategory";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../Shared/Loader";
import { Link } from "react-router-dom";

const MYreq = () => {
    const { user, loading } = useAuth();
    const { data: mealsCategory = [], isLoading, refetch } = useQuery({
        queryKey: ['meals'],
        enabled: !loading,
        queryFn: async () => await getmealByCategory(),
    });

    if (isLoading) return <Loader />;

    // Filter reviews based on the current user's email
    const myReviews = mealsCategory.reduce((acc, meal) => {
        // Check if meal.reviews is an array
        if (Array.isArray(meal.reviews)) {
            const userReviews = meal.reviews.filter((review) => review.UserEmail === user?.email);
            if (userReviews.length > 0) {
                acc.push({
                    mealId: meal._id,
                    title: meal.title,
                    likesCount: meal.likes,
                    reviewsCount: userReviews.length,
                });
            }
        }
        return acc;
    }, []);

    return (
        <div>
            {myReviews.map((review) => (
                <tr key={review.mealId}>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{review.title}</p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{review.likesCount}</p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{review.reviewsCount}</p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                            <span
                                aria-hidden='true'
                                className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                            ></span>
                            <span className='relative'>Edit</span>
                        </span>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                            <span
                                aria-hidden='true'
                                className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                            ></span>
                            <span className='relative'>Delete</span>
                        </span>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                            <span
                                aria-hidden='true'
                                className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                            ></span>
                            <Link to={`/mealsCategory/meal/${review.mealId}`}>   <span className='relative'>View Meal</span>
                            </Link>
                        </span>
                    </td>
                </tr>
            ))}
        </div>
    )
}

export default MYreq;