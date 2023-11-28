import Banner from "./Banner/Banner"
import ContactUs from "./ContactUS/ContactUs"
import MealsByCategory from "./MealsByCategory/MealsByCategory"
import Membership from "./Membership/Membership"

const Home = () => {

  return (
    <div>
      <Banner />
      <MealsByCategory />
      <Membership/>
      <ContactUs/>
    </div>
  )
}

export default Home
