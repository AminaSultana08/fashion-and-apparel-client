import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login";
import SignUp from "../Component/SignUp";
import PrivateRoute from "./PrivateRoute";

import AllProduct from "../Component/BrandsProduct/AllProduct";
import UpdateProduct from "../Pages/UpdateProduct";

import BrandDetails from "../Component/ProductDetails/BrandDetails";
import Contact from "../Pages/Contact";
import SingleProduct from "../Component/SingleProduct";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('BrandName.json')
            },
            {
                path:'/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/updateProduct/:_id',
                element:<UpdateProduct></UpdateProduct>,
                loader:({params})=>fetch(`https://fashion-and-apparel-server-ps09l1sek-amina-sultana-s-projects.vercel.app/product/${params._id}`),
                
            },
            {
                path:'/allProduct',
                element:<PrivateRoute><AllProduct></AllProduct></PrivateRoute>,
                loader:()=>fetch('https://fashion-and-apparel-server-ps09l1sek-amina-sultana-s-projects.vercel.app/product')

            },
            {
                path:'/myCart',
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {   
                  
                path:'/product/:brand_id',
                element:<BrandDetails></BrandDetails>
               
                
            },{
                path:'/singleProduct/:_id',
                element:<SingleProduct></SingleProduct>,
                loader:({params})=>fetch(`https://fashion-and-apparel-server-ps09l1sek-amina-sultana-s-projects.vercel.app/product/${params.id}`)
            },

            {
                path:'/contact',
                element:<Contact></Contact>
            }
           
        ]
    }
])

export default router;