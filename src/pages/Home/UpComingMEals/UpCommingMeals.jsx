
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { getUpmealByCategory } from "../../../api/mealCategory";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Shared/Loader";
import MealCard from "../MealsByCategory/MealCard";

const UpCommingMeals = () => {
    const { loading } = useAuth();
    const { data: meals = [], isLoading, refetch } = useQuery({
        queryKey: ['meals'],
        enabled: !loading,
        queryFn: async () => await getUpmealByCategory(),
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1); // Track the current page

    const [filteredMeals, setFilteredMeals] = useState([]);

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        setFilteredMeals(meals);
        setHasMore(true);
        setPage(1);
    }, [meals]);

    const loadMore = async () => {
        try {
            const newMeals = await getUpmealByCategory(page + 1);
            setFilteredMeals((prevMeals) => [...prevMeals, ...newMeals]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error("Error loading more meals:", error);
            setHasMore(false);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <div>
            <div className="p-5 w-1/2 mx-auto">

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
            <InfiniteScroll
                dataLength={filteredMeals.length}
                next={loadMore}
                hasMore={hasMore}
                loader={<Loader />} // Loader component while loading more data
            >
                <div className="grid md:grid-cols-3 gap-3 p-5">
                    {filteredMeals.map((meal) => (
                        <MealCard key={meal._id} meal={meal} />
                    ))}
                </div>
            </InfiniteScroll>
            {filteredMeals.length > 0 && (
                <button
                    className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
                    onClick={scrollToTop}
                >
                    Go to Top
                </button>
            )}
        </div>
    );
};



export default UpCommingMeals;