import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";


const MyCart = () => {
    // const carts = useLoaderData()
    
    // console.log(carts);
    const [cart, setCart] = useState()
    useEffect(()=>{
        fetch("https://fashion-and-apparel-server-three.vercel.app/carts")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCart(data)
        } )
    } ,[] )
    console.log(cart);
    return (
        <div className=" ">
           <h1 className="text-center font-Signika text-teal-600 font-bold text-4xl p-10">My Cart</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 lg:mx-2 md:mx-9 mx-10 ">
          {
            cart?.map((item,index)=><MyCartCard 
            key={index} 
           item={item}
           cart={cart}
           setCart={setCart}
           
            ></MyCartCard>)

           }
          </div>
        </div>
    );
};

export default MyCart;