import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getmealByCategory } from "../../api/mealCategory";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Shared/Loader";
import MealCard from "../Home/MealsByCategory/MealCard";

const Meals = () => {
    const { loading } = useAuth();
    const { data: meals = [], isLoading, refetch } = useQuery({
        queryKey: ['meals'],
        enabled: !loading,
        queryFn: async () => await getmealByCategory(),
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const filteredMeals = meals
        .filter((meal) =>
            meal.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((meal) =>
            selectedCategory === "All" ? true : meal.category === selectedCategory
        )
        .filter((meal) =>
            minPrice && maxPrice
                ? parseFloat(meal.price.substring(1)) >= parseFloat(minPrice) &&
                parseFloat(meal.price.substring(1)) <= parseFloat(maxPrice)
                : true
        );

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    if (isLoading) return <Loader />;

    return (
        <div>
            <div className="p-5 w-1/2   mx-auto">
                <input
                    type="text"
                    placeholder="Search by meal title"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="border border-gray-300 p-2 mb-4"
                />
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="border border-gray-300 p-2 mb-4"
                >
                    <option value="All">All Categories</option>
                    {/* Add your actual categories dynamically */}
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>
                <div>
                    <label className="block mb-2">Price Range:</label>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Min Price"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                            className="border border-gray-300 p-2"
                        />
                        <span className="text-gray-500">to</span>
                        <input
                            type="text"
                            placeholder="Max Price"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                            className="border border-gray-300 p-2"
                        />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 p-5">
                {filteredMeals.map((meal) => (
                    <MealCard key={meal._id} meal={meal} />
                ))}
            </div>
        </div>
    );
};

export default Meals;
