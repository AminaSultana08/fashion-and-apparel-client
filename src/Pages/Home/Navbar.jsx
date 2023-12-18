
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import  './NavStyle.css'


const Navbar = () => {
  const {user, logOut}=useContext(AuthContext)

const handleLogOut =()=>{
  logOut()
  .then()
  .catch()

}
    
    const navLink = <>
    <li><NavLink to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-800 underline" : ""
  } >Home </NavLink> </li>
    <li><NavLink to='/addProduct' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-800 underline" : ""
  } >Add Product</NavLink> </li>
    <li><NavLink to='/allProduct' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-800 underline" : ""
  } >All Product</NavLink> </li>
     <li><NavLink to='/myCart' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-800 underline" : ""
  } >My Cart</NavLink> </li> 
    <li><NavLink to='/contact' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-800 underline" : ""
  } >Contact</NavLink> </li>
    
    {
      user ? <>
     
      <button onClick={handleLogOut} className="bg-black p-1  flex justify-center items-center gap-1 text-white rounded-xl px-2" type=""> LogOut</button></> : <><li><Link to='/login'>Login</Link> </li></>
  }
    </> 
    return (
        <div >
        <div className="navbar bg-teal-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLink}
            </ul>
          </div>
          <div className="hidden lg:block md:block">
          <img className="  lg:h-20 md:h-16 " src="https://i.ibb.co/5M0tt2s/dark-blue.png" alt=""/>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex md:flex">
       
          <ul className="menu menu-horizontal px-1">
           {navLink}
          </ul>
          
        </div>
        
        <div className="navbar-end flex ">
        <span className="font-serif font-bold md:text-sm lg:text-sm pl-2 text-xs">{user?.displayName}  </span>
        <label  tabIndex={0} className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full flex">
        
          <img src={user?.photoURL} />
        </div>
       {/*  {
          user? <  >
          <span className="font-Signika font-bold ">{user.displayName}  </span>
          <span>{user.photo} </span>
          <button onClick={handleLogOut} className="btn bg-teal-600 text-white ">Log Out</button>
          </>
          :
          <Link to='/login'><button className="btn bg-teal-600 mr-10" >Login</button> </Link>
  
        } */}
      </label>
         
        </div>
      </div>
     
        </div>
    );
};

export default Navbar;