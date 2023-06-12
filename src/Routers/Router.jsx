
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ClassesPage from "../Pages/Home/ClassesPage/ClassesPage/ClassesPage";
import Secret from "../Pages/Sheard/Secret/Secret";
import PrivetRoute from "./PrivetRoute";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Layout/Dashboard";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import InstructorsPage from "../Pages/Home/InstructorsPage/InstructorsPage";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'classes',
          element:<ClassesPage></ClassesPage>
        },
        {
          path:'InstructorsPage',
          element:<InstructorsPage></InstructorsPage>
        },
        {
          path:'secret',
          element:<PrivetRoute><Secret></Secret></PrivetRoute>
        }
      ]
    },

    {
      path:'/dashboard',
      element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageClass',
          element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path:'payHistory',
          element:<PaymentHistory></PaymentHistory>
        }
      
      ]
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
    
  ]);