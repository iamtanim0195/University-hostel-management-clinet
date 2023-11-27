import Heading from "../../../components/Shared/Heading/Heading";

const Banner = () => {
    return (
        <div className="flex bg-cover bg-[url('https://i.ibb.co/Jtx0q6v/grilled-chicken-rice-spicy-chickpeas-avocado-cabbage-pepper-buddha-bowl-dark-top-view.jpg')]">
            <div className="flex  items-center h-screen flex-1 text-white">
                <div>
                    <Heading
                        title={`Fueling Your Body with Healthy Meals`}
                        subtitle={`Discover the Delight of Wholesome Ingredients and Balanced Nutrition for a Healthier Lifestyle`}
                        center={true}
                    />
                    <div className=" flex justify-center join pt-10 ">
                        <div>
                            <div >
                                <input className="input input-bordered join-item text-black" placeholder="Search"  type="text" />
                            </div>
                        </div>
                        <div className="indicator">
                            <button className="btn join-item">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner;