
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar';
import Footer from '../Component/Footer/Footer';



const Root = () => {
      

   return (
        <div className='max-w-7xl mx-auto  bg-teal-50'>
        <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;