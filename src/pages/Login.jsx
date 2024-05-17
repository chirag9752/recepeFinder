import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({setisLogin}) => {

  const navigate = useNavigate();

  const [formData , setformData] = useState(
   { email : "" , password : ""}
  );

  const Handlerfunction = (event) => {
       setformData( (prevData) => ({
          ...prevData ,
        [event.target.name] : event.target.value
        
      }))
  }

  const loginHandler = (event) => {
        
        event.preventDefault();
        axios.post("http://localhost:4000/login" , formData).then( (res) => {
        
        if(res.status === 200)
        {
           toast.success("login successfully");
           localStorage.setItem("token" , res.data.token);
           localStorage.setItem("user" , JSON.stringify(res.data.user));

           navigate("/searchpage");

           setisLogin(true);
           setformData({ email : "" , password : ""});
        }
        
       } 
      
      ).catch((error) => {
        if (error.response && error.response.status === 400) {
          toast.error("Please fill all the details");
        } else if (error.response && error.response.status === 404) {
          toast.error("User not found. Please register first");
          navigate("/signup");
        } else if(error.response && error.response.status === 401) {
          toast.error("please check the password");
          // console.log("please check the password", error.message);
        }
      } )
  }

  return (
    <div>
          <div className='relative w-screen h-screen'>
             
               <img className=' w-screen h-screen opacity-2' src="https://t4.ftcdn.net/jpg/01/80/26/03/360_F_180260315_gREfK8CvdnJN7mrUcopHsYvOdJs5qh0N.jpg" alt="" />
              
               <form onSubmit={loginHandler} className='absolute hover:shadow-2xl transition-all ease-linear
                bg-slate-300 rounded-md outline-2 justify-center p-6 items-center lg:w-[40%]
                  md:w-[60%] left-[10%] sm:w-[80%] top-52 mx-auto flex flex-col'>
                  
                  <h1 className='font-bold text-2xl mt-0 mb-5'>Login</h1>

                  <input className='rounded-md hover:shadow-xl transition-all ease-linear w-full h-12' 
                  type="email"
                   placeholder=' Enter your Email' 
                   onChange={Handlerfunction}
                   value= {formData.email}
                   name = "email"
                   />
                  <br />
                  <input className='rounded-md hover:shadow-xl transition-all ease-linear w-full h-12' 
                  type="password" 
                  placeholder=' Enter your password'
                  onChange={Handlerfunction}
                  value={formData.password}
                  name='password'
                  />
                  <button className=' mt-8 outline-lime-50 w-full h-12 font-bold hover:bg-slate-400 transition-all ease-linear rounded-md bg-green-400 mx-auto ' >Login</button>              
                   <p className='mt-4' >Dont't have an account ?<a href="/signup" className='text-blue-600 hover:underline'> signup</a> </p>
                </form>
          </div>
    </div>
  )
}

export default Login
