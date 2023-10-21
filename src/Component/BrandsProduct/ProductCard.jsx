import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

const ProductCard = ({product}) => {
    
    const {_id,name,photo,brand_name,type ,price,description,rating} = product

    useEffect(()=>{
      Aos.init({duration:2000})
    } ,[])
  

    return (
        <div >
        <div data-aos="zoom-out-down" className="relative flex flex-col text-gray-700 bg-teal-50 shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-teal-700 bg-teal-50 shadow-lg h-80 rounded-xl bg-clip-border">
    <img src={photo} alt="profile-picture" />
  </div>
  <div className="p-6 text-center font-Signika text-teal-700">
   <div className="flex justify-center gap-5">
   <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
   {name}
  </h4>
  <p className="flex items-center font-Signika text-teal-700 ">{rating} <FaStar className="w-3 text-teal-600"></FaStar> </p>
   </div>
    <p className="block  text-lg antialiased font-medium leading-relaxed  font-Signika text-teal-700 ">
    {brand_name}
    </p>
  </div>
  <div className="flex justify-between p-6 pt-2 font-Signika text-teal-700 gap-7">
    <p>{type}</p>
    <p>${price}</p>
  </div>
  
  <div className="flex justify-center gap-5 mb-2">
    <Link to={`updateProduct/${_id}`} >
    <button className="btn bg-teal-500 text-white font-Signika" >Edit</button>
     </Link>
    <Link><button className="btn bg-teal-500 text-white font-Signika " type=""> Details</button> </Link>
  </div>
</div>
        </div>
    );
};

export default ProductCard;