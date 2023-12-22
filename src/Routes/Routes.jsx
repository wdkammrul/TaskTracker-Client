import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../AuthenticationPage/Login/Login";
import Register from "../AuthenticationPage/Register/Register";
import DashBoard from "../Layout/DashBoard";
import PrivateRoute from "../AuthenticationPage/PrivateRoute/PrivateRoute";
import Profile from "../DashBoard/Profile/Profile";
import Tasks from "../DashBoard/Tasks/Tasks";
import Benefit from "../Pages/Home/Benefit/Benefit";
import Others from "../Pages/Others/Others";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/benefit',
                element: <Benefit></Benefit>
            },
            {
                path: '/others',
                element: <Others></Others>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }    
              
        ]
    },
    {
        path: "/dashBoard",
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
             {
                path: '/dashBoard/profile',
                element: <Profile></Profile>
             },
             {
                path: '/dashBoard/tasks',
                element: <Tasks></Tasks>
             },

        ]
    }
]);