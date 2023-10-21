import { Link } from "react-router-dom";


const BrandsCards = ({brand}) => {
    const{brand_id,image,brand_name} = brand
    return (
        <div>
        <div className="relative flex flex-col bg-[url(https://i.ibb.co/0FnC2pz/10.p)] text-gray-700 mt-3  shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative h-60 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-teal-50 bg-clip-border shadow-blue-gray-500/40">
          <img className="w-full h-60"
            src={image}
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="p-6 bg-teal-50">
          <h5 className="block mb-2  text-center text-xl font-Signika antialiased font-semibold leading-snug tracking-normal text-teal-800">
            {brand_name}
          </h5>
          
        </div>
        <div className="p-6 pt-0">
         <Link to={`/product/${brand_name}`}>
         <button
         className="select-none w-full rounded-lg bg-teal-500 py-3 px-6 text-center align-middle font-Signika text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
         type="button"
         data-ripple-light="true"
       >
         Products
       </button>
         </Link>
        </div>
      </div>
        </div>
    );
};

export default BrandsCards;