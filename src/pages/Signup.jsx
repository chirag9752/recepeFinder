import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({setisLogin}) => {
      const navigate = useNavigate();

     const [formData , setformData] = useState({
      firstname : "" , lastname : "" , email : "" , password : "" , confirmpassword : "" });

    
      const changeHandler = (event) => {
          setformData( (prevData) => ({
            ...prevData ,
            [event.target.name] : event.target.value
          }))
    }

    const signupHandler = (event) => {
      
      event.preventDefault();

      if(formData.password !== formData.confirmpassword)
      {
          toast.error("passwords are not match");
          return;
      }
          axios.post("http://localhost:4000/signUp" , formData).then((res => {

            if(res.status === 200)
            {
                  toast.success("successfully signup");
                  setisLogin(true);
                  navigate("/searchpage");
                  setformData({
                        firstname : "" ,
                        lastname : "" ,
                        email : "" ,
                        password : "" ,
                        confirmpassword : ""
                  })
            }else if(res.status === 400)
            {
               toast.error("user already registered please login");
               navigate("/login");
               setformData({
                  firstname : "" ,
                  lastname : "" ,
                  email : "" ,
                  password : "" ,
                  confirmpassword : ""
            })
      }

          } )).catch((error) => {
            console.log(error.message);
             toast.error(" unable to signup please check all the details");
          })
    }
  return (
    <div>
          <div className='relative w-screen h-screen'>
             
               <img className=' w-screen h-screen' src="https://t4.ftcdn.net/jpg/01/80/26/03/360_F_180260315_gREfK8CvdnJN7mrUcopHsYvOdJs5qh0N.jpg" alt="" />
              
               <form onSubmit={signupHandler} className='absolute hover:shadow-2xl transition-all ease-linear top-40 rounded-lg p-3 left-40 ouline gap-y-6 bg-slate-300 flex flex-col w-[40%] mx-auto  my-auto'>
                   
                   <h1 className='font-bold text-2xl flex justify-center' >Signup</h1>
                   
                   <div className='mt-3 flex flex-row gap-5  min-w-full'>
                       
                       <input className='block h-12 w-[50%] outline-none rounded-md border-0 py-1.5 text-gray-900
                        shadow-sm ring-1 ring-inset hover:shadow-xl transition-all ease-linear ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        type='text' 
                        placeholder='  firstname'
                        name='firstname'
                        value={formData.firstname}
                        onChange={changeHandler}
                        />
                      
                       <input className='block h-12 w-[50%] outline-none rounded-md border-0 py-1.5 text-gray-900
                        shadow-sm ring-1 ring-inset hover:shadow-xl transition-all ease-linear ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '
                         type='text' 
                         placeholder='  lastname'
                         name='lastname'
                         value={formData.lastname}
                         onChange={changeHandler}
                         />
                   </div>

                   <input className='block w-full h-12 outline-none rounded-md border-0 py-1.5 text-gray-900
                        shadow-sm ring-1 ring-inset hover:shadow-xl transition-all ease-linear ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '
                         type="email"
                         value={formData.email}
                         name='email'
                         placeholder =' Email'
                        onChange={changeHandler} />
        
                  <input className='block w-full h-12 outline-none rounded-md border-0 py-1.5 text-gray-900
                        shadow-sm ring-1 ring-inset hover:shadow-xl transition-all ease-linear ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ' 
                        type="password" 
                        name='password'
                        value={formData.password}
                        placeholder=' password'
                        onChange={changeHandler}/>

                  <input className='block w-full h-12 outline-none rounded-md border-0 py-1.5 text-gray-900
                        shadow-sm ring-1 ring-inset hover:shadow-xl transition-all ease-linear ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ' 
                        type="password" 
                        name='confirmpassword'
                        value={formData.confirmpassword}
                        placeholder=' confirm password'
                        onChange={changeHandler}/>
                  
                  <button className='p-2 hover:bg-slate-400 hover:shadow-xl transition-all ease-linear rounded-md w-full font-bold bg-green-400 mx-auto' >Signup</button>              
                
                  {/* <h1 className='flex justify-center gap-2'>Already register ?  <a href="/login" className='hover:underline text-blue-600'>  Login</a></h1> */}
                   <h1 className='flex justify-center gap-2'>Already register ? 
                    {
                        <Link to= "/login" className='hover:underline text-blue-600'>
                        Login
                        </Link>
                    }
                   </h1>
               
                </form>
          </div>                    
    </div>                 
  )
}

export default Signup
