/* eslint-disable react/prop-types */
import { Link, useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const BrandDetails = ({product}) => {
  
  const [products,setProducts]= useState(null)
  const [data,setData] = useState()
  const[singleProduct,setSingleProduct] = useState(null)
  const brandProduct = useLoaderData()
 
  const { brand_id } = useParams()
  
  console.log(brandProduct, brand_id);

  
  useEffect(()=>{
    fetch("https://fashion-and-apparel-server-9sufeyhjb-amina-sultana-s-projects.vercel.app/product")
    .then(res=>res.json())
    .then(data=>setData(data))
},[])



useEffect(()=>{
  const filterData=data?.filter((data)=>data.brand_name==brand_id)
console.log(filterData);
setProducts(filterData)
  
},[brand_id,data])
console.log(products);

console.log(singleProduct);



  

  return (
    <div className=" max-w-6xl mx-auto mt-20">
    
    
     <Marquee  direction="right" pauseOnHover = {true}   autoFill={true} speed={300}>
     <div className="carousel w-full">
     <div id="item1" className="carousel-item w-96 h-96">
       <img src="https://i.ibb.co/C2KqtZD/pexels-anastasiya-gepp-2036646.jpg" className="w-full" />
     </div>
     <div id="item2" className="carousel-item w-96 h-96">
       <img src="https://i.ibb.co/C5Jg3wx/beautiful-amazing-brunette-woman-with-long-wavy-hairstyle-spring-fall-stylish-urban-outfit-walking-s.jpg" className="w-full" />
     </div>
     <div id="item3" className="carousel-item w-96 h-96">
       <img src="https://i.ibb.co/K2x3XTv/sneaker-that-has-word-nike-it.jpg" className="w-full" />
     </div>
     <div id="item4" className="carousel-item w-96 h-96">
       <img src="https://i.ibb.co/6DBDCJ3/attractive-stylish-blonde-woman-jeans-oversize-jacket-walking-against-vintage-green-wall-street.jpg" className="w-full" />
     </div>
   </div>
     </Marquee>
     

<div>
<Marquee className="space-x-6  " pauseOnHover = {true} autoFill={true} speed={100}  >
 <h1 className="text-red-500 px-10 text-3xl">10%OFF</h1>
</Marquee>
</div>
      <div>
      <h1 className="text-4xl tex-center flex justify-center m-10 text-teal-700 font-Signika ">Welcome To Our Brand</h1>
      {
        products == 0? (
                   <div className="text-center p-20 mx-auto max-w-5xl flex items-center mb-20 justify-center bg-teal-100 text-teal-700 text-3xl font-Signika font-bold">
                     <h1>Sorry!There are no products available!</h1>
                  </div>
              ) 
              : ( 
                products?.map(product=> <div key={product.brand_id}>
                  <div className="flex  justify-center mb-7 gap-5 items-center max-w-6xl mx-auto">
                   
                  <div className="relative  flex flex-col text-gray-700 bg-teal-50 shadow-md w-96 rounded-xl bg-clip-border">
                  <div className="relative mx-4 mt-4 overflow-hidden text-teal-700 bg-teal-50 shadow-lg h-80 rounded-xl bg-clip-border">
                    <img src={product?.photo} alt="profile-picture" />
                  </div>
                  <div className="p-6 text-center font-Signika text-teal-700">
                   <div className="flex justify-center gap-5">
                   <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                   {product?.name}
                  </h4>
                  <p className="flex items-center font-Signika text-teal-700 ">{product?.rating} <FaStar className="w-3 text-teal-600"></FaStar> </p>
                   </div>
                    <p className="block  text-lg antialiased font-medium leading-relaxed  font-Signika text-teal-700 bg-clip-text">
                    {product?.brand_name}
                    </p>
                  </div>
                  <div className="flex justify-between p-6 pt-2 font-Signika text-teal-700 gap-7">
                    <p>{product?.type}</p>
                    <p>${product?.price}</p>
                  </div>
                  
                  <div className="flex justify-center gap-5 mb-2">
                    <Link to={`/updateProduct/${product._id}`} >
                    <button className="btn bg-teal-500 text-white font-Signika" >Edit</button>
                     </Link>
                    <Link to={`/singleProduct/${product._id}`} ><button className="btn bg-teal-500 text-white font-Signika " type=""> Details</button> </Link>
                  </div>
                </div>
                  </div>
                  </div>)
                )        
      }
    </div>


    </div>
  );
};

export default BrandDetails;