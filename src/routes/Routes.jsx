import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import { getMeal } from '../api/mealCategory'
import PrivateRoute from './PrivateRoute'
import MealDetails from '../pages/Home/MealsByCategory/MealDetails'
import Meals from '../pages/Meals/Meals'
import DashboardLayout from '../layouts/DashBoardLayout'
import Profile from '../pages/Dashboard/Common/Profile'
import UpCommingMeals from '../pages/Home/UpComingMEals/UpCommingMeals'
import ByMemberCard from '../pages/Home/Membership/ByMemberCard'
import RequestedMeals from '../pages/Dashboard/Student/RequestedMeals'
import MyReviews from '../pages/Dashboard/Student/MyReviews'
import AddMeal from '../pages/Dashboard/Admin/AddMeal'
import AllMeals from '../pages/Dashboard/Admin/AllMeals'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/mealsCategory/meal/:id',
        element: (
          <PrivateRoute>
            <MealDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getMeal(params.id)
      },
      {
        path: '/checkout/:label',
        element: (
          <PrivateRoute>
            <ByMemberCard />
          </PrivateRoute>
        ),
      },
      { path: '/meals', element: <Meals /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/up-coming-meals', element: <UpCommingMeals /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'add-meal',
        element:<PrivateRoute> <AddMeal /></PrivateRoute>,
      },
      {
        path: 'manage-users',
        element: <PrivateRoute><ManageUsers /></PrivateRoute> ,
      },
      {
        path: 'all-meals',
        element: <PrivateRoute><AllMeals /></PrivateRoute>,
      },
      {
        path: 'requested-meals',
        element:<PrivateRoute><RequestedMeals /></PrivateRoute> ,
      },
      {
        path: 'my-reviews',
        element:<PrivateRoute><MyReviews /></PrivateRoute> ,
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
    ]
  },
]);
