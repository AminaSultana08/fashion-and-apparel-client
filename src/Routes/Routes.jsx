import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login";
import SignUp from "../Component/SignUp";
import PrivateRoute from "./PrivateRoute";
import Nike from "../Component/AllBrands/Nike";
import Zara from "../Component/AllBrands/Zara";
import Gucci from "../Component/AllBrands/Gucci";
import HMbrand from "../Component/AllBrands/Hm";
import Levis from "../Component/AllBrands/Levis";
import Adidas from "../Component/AllBrands/Adidas";
import AllProduct from "../Component/BrandsProduct/AllProduct";
import UpdateProduct from "../Pages/UpdateProduct";

import BrandDetails from "../Component/ProductDetails/BrandDetails";


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
                path:'updateProduct/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path:'/allProduct',
                element:<AllProduct></AllProduct>,
                loader:()=>fetch('http://localhost:5000/product')

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
                element:<BrandDetails></BrandDetails>,
                
            },
            {
                path:'/nike',
                element:<Nike></Nike>
            },
            {
                path:'/zara',
                element:<Zara></Zara>
            },
            {
                path:'/gucci',
                element:<Gucci></Gucci>
            },
            {
                path:'/hm',
                element:<HMbrand></HMbrand>
            },
            {
                path:'/levis',
                element:<Levis></Levis>
            },
            {
                path:'/adidas',
                element:<Adidas></Adidas>
            },
           
        ]
    }
])

export default router;