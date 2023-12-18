import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
//import SingleProductCard from "./SingleProductCard";

const SingleProduct = () => {
  // const [productDetails, setProductDetails] = useState(null)
  const myCart = useLoaderData();
  console.log(myCart);
  const {_id,brand_name,name,description,photo,type,price,rating,  }=myCart
  const handleAddCart =()=>{
    console.log('clicked');

    fetch("https://fashion-and-apparel-server-three.vercel.app/carts",{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(myCart)
    })
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: `${name} has been added to Your Cart successfully`,
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }

  return (
    <div>
  
     

       <div className="relative flex justify-center items-center max-h-screen my-32  flex-col text-gray-700 bg-white shadow-md  lg:max-w-2xl lg:mx-auto w-96 rounded-xl bg-clip-border">
  <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      src={photo}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-6">
   <div className="flex justify-between">
   <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
   {brand_name}
 </h5>
 <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
   {name}
 </h5>
   </div>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
     {description}
    </p>
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">Price: 
   ${price}
 </h5>
  </div>
  <div className="p-6 pt-0">
    <Link to={`/myCart/${_id}`}><button
    onClick={handleAddCart}
    className=" flex justify-center mx-24 select-none rounded-lg bg-teal-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
   Add To Cart
  </button></Link>
  </div>
</div> 
    </div>
  );
};

export default SingleProduct;
