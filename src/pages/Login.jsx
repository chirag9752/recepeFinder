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
        
          console.log(res.data);

        if(res.data.status === 200)
        {
           toast.success("login successfully");
           localStorage.setItem("token" , res.data.token);
           localStorage.setItem("user" , JSON.stringify(res.data.user));

           navigate("/searchpage");

           setisLogin(true);
           setformData({ email : "" , password : ""});
        }
        else{
          toast.error("email and password are incorrect");
        }
       } 
      
      ).catch((err) => {
        console.log("error in login" , err.message);
      } )
  }

  return (
    <div>
          <div className='relative w-screen h-screen'>
             
               <img className=' w-screen h-screen' src="https://t4.ftcdn.net/jpg/01/80/26/03/360_F_180260315_gREfK8CvdnJN7mrUcopHsYvOdJs5qh0N.jpg" alt="" />
              
               <form onSubmit={loginHandler} className='absolute w-[20%] left-40 top-52 mx-auto flex flex-col'>

                  <input className='rounded-sm h-7' 
                  type="email"
                   placeholder=' Enter your Email' 
                   onChange={Handlerfunction}
                   value= {formData.email}
                   name = "email"
                   />
                  <br />
                  <input className='rounded-sm h-7' 
                  type="password" 
                  placeholder=' Enter your password'
                  onChange={Handlerfunction}
                  value={formData.password}
                  name='password'
                  />
                  <button className='p-2 outline-lime-50 hover:bg-slate-400 rounded-xl bg-green-500 mx-auto mt-5' >Login</button>              
                
                </form>
          </div>
    </div>
  )
}

export default Login
