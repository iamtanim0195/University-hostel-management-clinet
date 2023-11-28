import Banner from "./Banner/Banner"
import ContactUs from "./ContactUS/ContactUs"
import MealsByCategory from "./MealsByCategory/MealsByCategory"

const Home = () => {

  return (
    <div>
      <Banner />
      <MealsByCategory />
      <ContactUs/>
    </div>
  )
}

export default Home
