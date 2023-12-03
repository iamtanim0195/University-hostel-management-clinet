import axiosSecure from ".";

export const createPaymentIntent = async (price)=>{
    const {data} = await axiosSecure.post('/create-payment-intent',price)
    return data
}

// save info in db
export const saveBookingInfo = async (paymentInfo)=>{
    const {data} = await axiosSecure.post('/bookings', paymentInfo)
    return data
}
export const savereqInfo = async (reqInfo)=>{
    const {data} = await axiosSecure.post('/reqInfo', reqInfo)
    return data
}
export const getBookingInfo = async () => {
    const {data} = await axiosSecure('/bookings');
    return data;
};
// update  meals status
export const updateStatus = async (id, status) =>{
    const {data} = await axiosSecure.patch(`/mealsCategory/status/${id}`, {status})
    return data
}