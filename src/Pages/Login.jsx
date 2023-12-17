import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Navbar from "./Home/Navbar";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";
import { useState } from "react";



const Login = () => {
  const {signInUser,loginWithGoogle,loginWithGithub} = useContext(AuthContext)
  const [success, setSuccess] = useState('')
  const [error, setError]=useState('')
  const location = useLocation()
  const navigate = useNavigate()
  console.log('location here' ,location);
  const handleLogin=e=>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password= form.password.value
    
    console.log(email,password);

    signInUser(email,password)
    .then(result=>{
      console.log(result.user);
      setSuccess(success)
      swal('success', 'Login succeed')
      
      navigate(location?.state ? location.state : '/' )
    })
    .catch(error=>{
      console.error(error);
      setError(error)
      swal(error.message)
    })


  }

  const handleLoginGoogle = ()=>{
    loginWithGoogle()
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.error(error);
      setError(error)
      swal(error.message)
    })
  }

  const handleLoginGithub = ()=>{
    loginWithGithub()
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.error(error);
      setError(error)
      swal(error.message)
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
            <label className="mr-1 mt-10 lg:ml-28 md:ml-3 ml-7 font-bold text-xl text-teal-700 font-Signika text-center"> <span className="text-teal-300"> Sign in</span> with</label>
            <button
            onClick={handleLoginGoogle}
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-teal-500 hover:bg-teal-100 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
             <FaGoogle className="w-9"></FaGoogle>
            </button>
            <button
               onClick={handleLoginGithub}
              type="button"
              className="inline-block mx-1 h-9 w-9 rounded-full bg-teal-500 hover:bg-teal-600 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
             <FaGithub className="w-9" ></FaGithub>
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t-2 px-5 before:border-teal-900 after:mt-0.5 after:flex-1 after:border-t-2 after:border-teal-900">
            <p className="mx-4 mb-0 text-center font-semibold text-xl text-teal-800">Or</p>
          </div>
        <form onSubmit={handleLogin}>
        <input className="text-sm lg:w-full md:w-full w-80 mx-8 md:mx-0 px-4 py-2 border border-solid border-gray-300 rounded" type="text" name="email" placeholder="Email Address " required />
        <input className="text-sm lg:w-full md:w-full w-80 mx-8 md:mx-0   px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" name="password" placeholder="Password" required />
       
        <div className="text-center  md:text-left">
          <button className="mt-4 md:ml-20 lg:ml-32 mx-40 bg-teal-600 hover:bg-teal-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider flex lg:justify-center lg:items-center md:justify-center md:items-center font-Signika" type="submit">Login</button>
        </div>
        </form>
          <div className="mt-4 font-semibold flex justify-center font-Signika text-sm text-teal-700 mx-10 text-center md:text-left">
            Don't have an account? <Link to='/signup'  className="text-teal-900 font-Signika hover:underline hover:underline-offset-4 pl-2 underline" > Register</Link>
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