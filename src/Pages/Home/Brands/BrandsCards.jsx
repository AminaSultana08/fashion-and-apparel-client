

const BrandsCards = ({brand}) => {
    const{image,name} = brand
    return (
        <div>
        <div className="relative flex flex-col text-gray-700 mt-3 bg-yellow-50 shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img className="w-full h-64"
            src={image}
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-center text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h5>
          
        </div>
        <div className="p-6 pt-0">
          <button
            className="select-none w-full rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Products
          </button>
        </div>
      </div>
        </div>
    );
};

export default BrandsCards;