
import { FaPhoneAlt } from 'react-icons/fa';
import { GrLocation, GrMailOption } from "react-icons/gr";
const Contact = () => {
    return (
        <div>
         
            <div  className='bg-[url(https://i.ibb.co/RDZk4Gs/82239.jpg)] mx-auto max-w-6xl bg-no-repeat flex items-center justify-center bg-cover h-full'>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md max-w-4xl rounded-xl bg-clip-border m-20  ">
            <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-teal-900 to-teal-500 bg-clip-border shadow-teal-500/40">
              <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                Contact
              </h3>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div className='flex items-center gap-3 border-b-2 pb-2 border-dotted border-teal-200 px-3'>
              <h2 className='text-xl font-Signika text-teal-700'><FaPhoneAlt ></FaPhoneAlt> </h2>
              <p className='text-xl font-Signika text-teal-800'>042-3578-1763 , 042-3578-1966</p>
              </div>
             <div className='flex items-center gap-3 border-b-2 pb-2 border-dotted border-teal-200 px-3'>
              <h1 className='text-xl font-Signika text-teal-700'> <GrMailOption className='text-teal-700'></GrMailOption>
               </h1>
               <p className='text-xl font-Signika text-teal-800'>amina.elegance@outlook.com</p>
             </div>
             <div className='flex items-center gap-2 border-b-2 pb-2 border-dotted border-teal-200 px-3'>
              <h1 className='text-xl font-Signika text-teal-700'> <GrLocation className='text-teal-700'></GrLocation >
               </h1>
               <p className='text-xl text-teal-800 font-Signika' >17600 Yonge Street, Box 256
               Newmarket, ON L3Y 4Z1</p>
             </div>
              
            </div>
            <div className="p-6 pt-0">
              
            </div>
          </div>
            </div>
           
        </div>
    );
};

export default Contact;