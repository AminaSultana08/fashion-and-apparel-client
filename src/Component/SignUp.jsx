import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import swal from "sweetalert";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";


const SignUp = () => {
  const {createUser,logOut} = useContext(AuthContext)
  const [success, setSuccess] = useState('')
  const [error, setError]=useState('')
  const [showPassword , setShowPassword] = useState(false)
  const navigate = useNavigate()
  const handleSignup = e=>{
    e.preventDefault()
    const form = e.target;
    const name= form.name.value
    const photo = form.photo.value
    const email = form . email.value
    const password= form.password.value
    
    console.log(name,photo,email,password);

    if(password.length>6){
      setError('Password must be at least 6 characters or longer')
      return;
    }
    else if (!/^(?=.*[!@#$%^&*])[A-Z!@#$%^&*]{6,}$/.test(password)) {
      setError('Password must have upper case and special characters')
      return
    }


    setSuccess('')
    setError('')

    createUser(email,password)
    .then(result=>{
      console.log(result.user);
      setSuccess(success)
      swal('success', 'Congratulations, You have Sign Up Successfully' )

      updateProfile (result.user,{
        displayName:name,
        photoURL:photo,
      })
      .then(()=>{
        console.log('User profile updated')
        logOut()
        navigate('/login')
        
    } )
      .catch(error=>{
        console.log(error);
      })


    })
    .catch(error=>{
      console.error(error);
      setError(error.message)
    })

    
   

    }

    
  
    return (
    
        <div className='bg-[url(https://i.ibb.co/QF12HD8/young-pretty-girl-choosing-trying-dresses-shop.jpg)] bg-cover h-screen w-screen bg-no-repeat' >
        
        <form onSubmit={handleSignup} className="card-body font-Signika  lg:w-1/2 md:3/4 mx-auto  ">
        <h1 className="text-2xl  font-bold mt-20 ">Create an Account</h1>
        <div className="form-control  ">
          <label className="label">
            <span className="label-text font-bold   "> Name</span>
          </label>
          <input type="text" placeholder="your Name"   name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold  ">Photo</span>
          </label>
          <input type="url" placeholder="photo-url"  name="photo" src="url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold  ">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control  relative">
          <label className="label">
            <span className="label-text font-bold  ">Password</span>
          </label>
          <input type= {showPassword? 'text': "password" }
          placeholder="password" name="password" className="input input-bordered relative " required />
          <span onClick={()=> setShowPassword(!showPassword)} className="absolute   top-2/3 left-full -ml-7" >
          {
            showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
          }
          </span>
         

        </div>
        <div className="text-center  md:text-left">
        <button className="mt-4 flex ml-64 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Sign Up</button>
      </div>

       
      </form>
      {
        error && <p className="text-red-600 text-lg text-center mb-2">{error} </p>

      }


      <div className="mt-4  flex font-semibold text-2xl text-black font-Signika justify-center text-center md:text-left">
      Already have an account? <Link to='/login'  className="text-blue-800  hover:underline hover:underline-offset-4" >Login</Link>
      </div>
      
      </div>
    );
};

export default SignUp;