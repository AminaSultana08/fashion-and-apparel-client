
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = () => {
    return (    
        <div className="mt-10  bg-[url(https://i.ibb.co/F3BYPX2/13.jpg)] border-2 border-red-50">
            <Marquee pauseOnHover = {true} autoFill={true} speed={100}  >
               <Link to='/addProduct'><img className="w-32  pl-10 " src="https://i.ibb.co/mG4M1rs/pngimg-com-nike-PNG16.png" alt=""/></Link>

              <Link to='/addProduct'> <img className="w-40 pl-10" src="https://i.ibb.co/QHYJLWK/3-2-adidas-logo-png.png"  alt=""/></Link>

               <Link to='/addProduct'><img className="w-36  pl-10" src="https://i.ibb.co/bJH5KWZ/gucci-logo-49116.png" alt=""/></Link>

              <Link to='/addProduct'> <img className="w-36  pl-10" src="https://i.ibb.co/jrsyL4P/levis-vector-logo.png" alt=""/></Link>

              <Link to='/addProduct'> <img className="w-36  pl-10" src="https://i.ibb.co/2NH3NtZ/hm-logo-1.png" alt=""/></Link>

               <Link to='/addProduct'><img className="w-36   pl-10" src="https://i.ibb.co/hXJB2fS/zara-brand-40033.png" alt=""/></Link>
            </Marquee>
        </div>
    );
};

export default TopBrands;