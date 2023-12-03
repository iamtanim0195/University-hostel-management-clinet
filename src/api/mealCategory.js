import axiosSecure from ".";

// get meal by category
export const getmealByCategory = async () => {
    const {data} = await axiosSecure(`/mealsCategory`);
    return data;
};
// get up meal by category
export const getUpmealByCategory = async () => {
    const {data} = await axiosSecure(`/upComingMeals`);
    return data;
};
// get single meal from db
export const getMeal = async (id) => {
    const {data} = await axiosSecure(`/mealsCategory/meal/${id}`);
    return data;
};
//get all meal for user
export const getUserMeal = async (email) => {
    const {data} = await axiosSecure(`/mealsCategory/meals/${email}`);
    return data;
};
//save a meal data in meal by category db
export const addMeal = async (mealData)=>{
    const {data} = await axiosSecure.post(`/mealsCategory`, mealData);
    return data;
}
//save a meal data in meal by category db
export const addUpComingMeals = async (mealData)=>{
    const {data} = await axiosSecure.post(`/upComingMeals`, mealData);
    return data;
}