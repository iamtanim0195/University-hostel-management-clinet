import { TbFidgetSpinner } from 'react-icons/tb';
import { categories } from '../Categories/categoriesData';
const AddMealForm = ({
    handleSubmit,
    loading = false,
    handleImageChange,
    uploadButtonText,
    handleButtonClick,
}) => {
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='category' className='block text-gray-600'>
                                Meal Category
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                name='category'
                            >
                                {categories.map(category => (
                                    <option value={category.label} key={category.label}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='space-y-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='ingredients' className='block text-gray-600'>
                                    Ingredients
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='ingredients'
                                    id='ingredients'
                                    type='text'
                                    placeholder='Ingredients'
                                    required
                                />
                            </div>
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor='time' className='block text-gray-600'>
                                Post Time/Date
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='time'
                                id='time'
                                type='text'
                                placeholder='Post Time/Date'
                                required
                            />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor='distributor_name' className='block text-gray-600'>
                                Distributor Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='distributor_name'
                                id='distributor_name'
                                type='text'
                                placeholder='Distributor Name'
                                required
                            />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor='distributor_email' className='block text-gray-600'>
                                Distributor Email
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='distributor_email'
                                id='distributor_email'
                                type='email'
                                placeholder='Distributor Email'
                                required
                            />
                        </div>
                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='title' className='block text-gray-600'>
                                Meal Title
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='title'
                                id='title'
                                type='text'
                                placeholder='Title'
                                required
                            />
                        </div>
                        <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            onChange={e => handleImageChange(e.target.files[0])}
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image'
                                            id='image'
                                            accept='image/*'
                                            required
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            {uploadButtonText}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Price
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='price'
                                    id='price'
                                    type='number'
                                    placeholder='Price'
                                    required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='rating' className='block text-gray-600'>
                                    Rating
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='rating'
                                    id='rating'
                                    type='number'
                                    placeholder='Rating'
                                    required
                                />
                            </div>
                        </div>
                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='reviews' className='block text-gray-600'>
                                    Reviews
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='reviews'
                                    id='reviews'
                                    type='number'
                                    placeholder='Reviews'
                                    defaultValue={0}
                                    required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='likes' className='block text-gray-600'>
                                    Likes
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='likes'
                                    id='likes'
                                    type='number'
                                    placeholder='Likes'
                                    defaultValue={0}
                                    required
                                />
                            </div>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>
                            <textarea
                                id='description'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                                name='description'
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className='w-80 flex flex-col md:flex-row gap-5 mx-auto '>
                <button
                        type='submit'
                        className='btn btn-primary p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                        onClick={() => handleButtonClick('addMeal')}
                    >
                        {loading ? (
                            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                        ) : (
                            'Add Meal'
                        )}
                    </button>
                    <button
                        type='submit'
                        className='btn btn-primary p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                        onClick={() => handleButtonClick('addToUpcoming')}
                    >
                        {loading ? (
                            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                        ) : (
                            'Add to Upcoming'
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddMealForm;