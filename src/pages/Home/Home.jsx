import { Helmet } from "react-helmet-async"
import Banner from "./Banner/Banner"
import ContactUs from "./ContactUS/ContactUs"
import MealsByCategory from "./MealsByCategory/MealsByCategory"
import Membership from "./Membership/Membership"

const Home = () => {

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner />
      <MealsByCategory />
      <Membership />
      <ContactUs />
    </div>
  )
}

export default Home
