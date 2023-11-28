import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import { getMeal, getmealByCategory } from '../api/mealCategory'
import PrivateRoute from './PrivateRoute'
import MealDetails from '../pages/Home/MealsByCategory/MealDetails'
import Meals from '../pages/Meals/Meals'

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
          loader:({params})=> getMeal(params.id)
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/meals', element: <Meals /> },
])
