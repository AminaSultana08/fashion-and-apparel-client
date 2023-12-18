import { useLoaderData } from "react-router-dom";

import ProductCard from "./ProductCard";
import {  useState } from "react";


const AllProduct = ({product}) => {
    const products = useLoaderData()
    const [dataLength , setDataLength] = useState(6)
  
    return (
        <div>
           
            <div>
                <h1 className="text-center mx-2 my-10 text-4xl font-Signika  text-teal-700 font-bold">Our All Products  </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {
                        products.slice(0,dataLength).map(product =><ProductCard 
                            key={product._id} 
                            product={product}
                             ></ProductCard> )
                    }
                </div>
                <div className="flex justify-center">
                <div  className={dataLength ===products?.length? 'hidden' : ''}>
                <button onClick={()=>setDataLength(products?.length)} className="btn  my-5 bg-teal-600 font-Signika font-bold  text-white">Show All Products</button>
            </div>
                </div>
            </div>
           
        </div>
    );
};

export default AllProduct;