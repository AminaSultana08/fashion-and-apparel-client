import React from 'react';
import Navbar from './Home/Navbar';
import Footer from '../Component/Footer/Footer';

const Contact = () => {
    return (
        <div>
          <Navbar></Navbar>
            <div  className='bg-[url(https://i.ibb.co/RDZk4Gs/82239.jpg)] mx-auto max-w-6xl bg-no-repeat flex items-center justify-center bg-cover h-full'>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border m-20  ">
            <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-teal-900 to-teal-500 bg-clip-border shadow-teal-500/40">
              <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                Contact
              </h3>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div>
              <h2 className='text-xl font-Signika text-teal-700'>Phone Number</h2>
              <p>01278464839</p>
              </div>
             
              
            </div>
            <div className="p-6 pt-0">
              
            </div>
          </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;