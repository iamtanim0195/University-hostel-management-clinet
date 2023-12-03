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
import AddMeal from '../pages/Dashboard/Distributor/AddMeal'
import AllMeals from '../pages/Dashboard/Distributor/AllMeals'
import Profile from '../pages/Dashboard/Common/Profile'
import UpCommingMeals from '../pages/Home/UpComingMEals/UpCommingMeals'
import ByMemberCard from '../pages/Home/Membership/ByMemberCard'

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
        element: <AddMeal />,
      },
      {
        path: 'all-meals',
        element: <AllMeals />,
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
    ]
  },
]);
