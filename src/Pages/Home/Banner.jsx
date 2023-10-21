
const Banner = () => {
    return (
        <div>
        <div className="carousel lg:w-full w-96">
        <div id="slide1" className="carousel-item  bg-black  lg:w-full w-96 relative bg-gradient-to-tr from-gray-500 to-gray-900  ">
          <img src="https://i.ibb.co/Fqvmmgz/young-woman-model-blue-winter-jacket.jpg" className="lg:w-full w-96 lg:h-full h-80 object-cover absolute mix-blend-overlay" />
          <div className='p-20 '>
          <h1 className='lg:text-4xl text-2xl font-Signika text-white text-start mt-14  pr-20 items-center font-extrabold'>  Timeless Elegance, Exquisite Threads:<br/> Discover <span className='font-Signika lg:text-6xl text-3xl '>Amina Elegance</span> , <br/> Where Style Speaks Volumes </h1>

        </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2"  className="carousel-item  bg-black  w-full relative bg-gradient-to-tr from-gray-500 to-gray-900  ">
          <img src="https://i.ibb.co/DYwCYgj/close-up-woman-legs-wearing-black-leather-boots-jeans-footwear-spring-trends-holding-bag.jpg" className="w-full  h-full object-cover absolute mix-blend-overlay" />

          <div className='p-20 '>
          <h1 className='text-4xl font-Signika text-white text-start mt-14  pr-20 items-center font-extrabold'>  Timeless Elegance, Exquisite Threads:<br/> Discover <span className='font-Signika text-6xl'>Amina Elegance</span> , <br/> Where Style Speaks Volumes </h1>

        </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3"  className="carousel-item  bg-black  w-full relative bg-gradient-to-tr from-gray-500 to-gray-900  ">
          <img src="https://i.ibb.co/SV6Q2BX/high-fashion-portrait-young-elegant-blonde-woman-black-wool-hat-wearing-oversize-white-fringe-poncho.jpg" className="w-full  h-full object-cover absolute mix-blend-overlay" />

           <div className='p-20 '>
          <h1 className='text-4xl font-Signika text-white text-start mt-14  pr-20 items-center font-extrabold'>  Timeless Elegance, Exquisite Threads:<br/> Discover <span className='font-Signika text-6xl'>Amina Elegance</span> , <br/> Where Style Speaks Volumes </h1>

        </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4"  className="carousel-item  bg-black h-screen  w-full relative bg-gradient-to-tr from-gray-500 to-gray-900  ">
          <img src="https://i.ibb.co/7SsL50m/retro-man-dressed-shirt-lies-floor-posing.jpg" className="w-full  h-full object-cover absolute mix-blend-overlay" />

          
          <div className='p-20 '>
          <h1 className='text-4xl font-Signika text-white text-start mt-14  pr-20 items-center font-extrabold'>  Timeless Elegance, Exquisite Threads:<br/> Discover <span className='font-Signika text-6xl'>Amina Elegance</span> , <br/> Where Style Speaks Volumes </h1>

        </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;