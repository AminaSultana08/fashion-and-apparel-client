
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
const ErrorPage = () => {
    useEffect (()=>{
        Aos.init({duration:2000})
      } ,[])
    return (
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className=" flex justify-center items-center m-14 ">
            <img src="https://i.ibb.co/kMrNdNY/266624-P5-CSO7-349.jpg" alt=""/>
        </div>
    );
};

export default ErrorPage;