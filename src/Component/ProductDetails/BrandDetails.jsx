import { Link, useLoaderData, useParams } from "react-router-dom";

import AllProduct from "../BrandsProduct/AllProduct";
import { useEffect, useState } from "react";
import Navbar from "../../Pages/Home/Navbar";
import { FaStar } from "react-icons/fa";


const BrandDetails = () => {
  const [products,setProducts]= useState(null)
  const [data,setData] = useState()
  const brandProduct = useLoaderData()
  const { brand_id } = useParams()
  console.log(brandProduct, brand_id);

  
  useEffect(()=>{
    fetch("http://localhost:5000/product")
    .then(res=>res.json())
    .then(data=>setData(data))
},[])

useEffect(()=>{
  const filterData=data?.filter((data)=>data.brand_name==brand_id)
console.log(filterData);
setProducts(filterData)
  
},[brand_id,data])
console.log(products);
// const {_id,name,photo,brand_name,type ,price,description,rating} = products

  // const filterProducts = brandProduct.filter((product)=> product.brand_name== brand_name )
  // console.log(filterProducts);

  // <div>
  //   {
  //     filterProducts == 0? (
  //         <div className="text-center bg-teal-100 text-teal-700 text-3xl font-Signika font-bold">
  //             <h1>Sorry!There are no products available!</h1>
  //         </div>
  //     ) : ( 
  //         filterProducts.map((item,index)=> <AllProduct key={index} product={item} ></AllProduct> )
  //     )

  //    }
  // </div>

  return (
    <div className=" max-w-6xl mx-auto">
    <Navbar></Navbar>
    <h1 className="4xl">Filter dataS</h1>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full h-auto">
          <img src="https://i.ibb.co/5rjHsqR/pexels-kaique-rocha-48013.jpg" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://i.ibb.co/jrQfxbM/gettyimages-1238732406-612x612.jpg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://i.ibb.co/K2x3XTv/sneaker-that-has-word-nike-it.jpg" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://i.ibb.co/MDFvZxT/chuttersnap-XNq-Llj-W6-XU8-unsplash.jpg" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>


    <div>
      <h1 className="text-4xl">total products : {products.length} </h1>
    {
      
  products.map(product=> <div key={product.brand_id}>
    <div className="grid lg:grid-cols-2 grid-cols-1 justify-center mb-7 gap-5 items-center max-w-6xl mx-auto">
     
    <div className="relative flex flex-col text-gray-700 bg-teal-50 shadow-md w-96 rounded-xl bg-clip-border">
    <div className="relative mx-4 mt-4 overflow-hidden text-teal-700 bg-teal-50 shadow-lg h-80 rounded-xl bg-clip-border">
      <img src={product.photo} alt="profile-picture" />
    </div>
    <div className="p-6 text-center font-Signika text-teal-700">
     <div className="flex justify-center gap-5">
     <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     {product.name}
    </h4>
    <p className="flex items-center font-Signika text-teal-700 ">{product.rating} <FaStar className="w-3 text-teal-600"></FaStar> </p>
     </div>
      <p className="block  text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr  font-Signika text-teal-700 bg-clip-text">
      {product.brand_name}
      </p>
    </div>
    <div className="flex justify-between p-6 pt-2 font-Signika text-teal-700 gap-7">
      <p>{product.type}</p>
      <p>${product.price}</p>
    </div>
    
    <div className="flex justify-center gap-5 mb-2">
      <Link  >
      <button className="btn bg-teal-500 text-white font-Signika" >Edit</button>
       </Link>
      <Link><button className="btn bg-teal-500 text-white font-Signika " type=""> Details</button> </Link>
    </div>
  </div>
    </div>
    </div>)
    }
    
    </div>


    </div>
  );
};

export default BrandDetails;