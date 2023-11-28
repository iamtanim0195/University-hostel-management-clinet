import axiosSecure from ".";

// get meal by category
export const getmealByCategory = async () => {
    const {data} = await axiosSecure(`/mealsCategory`);
    return data;
};
// get single meal from db
export const getMeal = async (id) => {
    const {data} = await axiosSecure(`/mealsCategory/meal/${id}`);
    return data;
};