import { Link } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Navbar from "./Home/Navbar";
import { FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const Login = () => {
  const {signInUser} = useContext(AuthContext)
  const handleLogin=e=>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password= form.password.value
    
    console.log(email,password);

    signInUser(email,password)
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.error(error);
    })


  }


    return (
        
        <div>
        <Navbar></Navbar>
       { <div className="bg-[url(https://i.ibb.co/2tQ5j4d/woman-feminine-lifestyle-shopping-fashionista-with-marble-background.jpg)] bg-cover h-screen bg-no-repeat">
        
        <div className="mt-10">
        <section className="h-screen flex   justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
       
        <div className="md:w-1/3 max-w-sm ">
          <div className="text-center justify-center items-center md:text-left">
            <label className="mr-1 mt-10 ml-28 font-bold tet-4xl text-center">Sign in with</label>
            <button
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>
            <button
            
              type="button"
              className="inline-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
             <FaGithub className="w-9" ></FaGithub>
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t-2 before:border-blue-900 after:mt-0.5 after:flex-1 after:border-t-2 after:border-blue-900">
            <p className="mx-4 mb-0 text-center font-semibold text-xl text-black">Or</p>
          </div>
        <form onSubmit={handleLogin}>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" name="email" placeholder="Email Address " required />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" name="password" placeholder="Password" required />
       
        <div className="text-center  md:text-left">
          <button className="mt-4 ml-40 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        </form>
          <div className="mt-4 font-semibold text-sm text-black ml-28 text-center md:text-left">
            Don't have an account? <Link to='/signup'  className="text-black hover:underline hover:underline-offset-4" >Register</Link>
          </div>
        </div>
      </section>
        </div>
    </div>}
    <Footer></Footer>
        </div>
    );
};

export default Login;