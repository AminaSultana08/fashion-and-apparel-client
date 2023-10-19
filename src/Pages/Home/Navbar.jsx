
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
    <li><NavLink to='/' >Home </NavLink> </li>
    <li><NavLink to='/addProduct' >Add Product</NavLink> </li>
    <li><NavLink to='/myCart' >My Cart</NavLink> </li>
    <li><NavLink to='/contact' >Contact</NavLink> </li>
    <li><NavLink to='/login' >Login</NavLink> </li>
    </> 
    return (
        <div>
        <div className="navbar bg-base-100 mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLink}
            </ul>
          </div>
          <img className="btn btn-ghost normal-case  h-24" src="https://i.ibb.co/5M0tt2s/dark-blue.png" alt=""/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLink}
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/28ZfH6Z/customer-service.png" />
        </div>
        {
          user? <button onClick={handleLogOut} className="btn">Log Out</button>
          :
          <Link to='/login'><button className="btn btn-secondary" >Login</button> </Link>


        }
      </label>
         
        </div>
      </div>
        </div>
    );
};

export default Navbar;