import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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

            if(res.data.status === 200)
            {
                  toast.success("successfully signup");
                  setisLogin(true);
                  navigate("/receipepoint");
                  setformData({
                        firstname : "" , lastname : "" , email : "" , password : "" , confirmpassword : ""
                  })
            }else
            {
               toast.error("user already registered please login");
               navigate("/login");
               setformData({
                  firstname : "" , lastname : "" , email : "", password : "" , confirmpassword : ""
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
              
               <form onSubmit={signupHandler} className='absolute top-40 rounded-lg p-2 left-40 ouline gap-y-2  bg-white flex flex-col w-[25%] mx-auto  my-auto'>
                   
                   <div className='mt-3 flex flex-row gap-5 min-w-full'>
                       
                       <input className='block w-[50%] rounded-md border-0 py-1.5 text-gray-900
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        type='text' 
                        placeholder=' firstname'
                        name='firstname'
                        value={formData.firstname}
                        onChange={changeHandler}
                        />
                      
                       <input className='block w-[50%] rounded-md border-0 py-1.5 text-gray-900
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '
                         type='text' 
                         placeholder=' lastname'
                         name='lastname'
                         value={formData.lastname}
                         onChange={changeHandler}
                         />
                   </div>

                   <input className='block w-full rounded-md border-0 py-1.5 text-gray-900
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '
                         type="email"
                         value={formData.email}
                         name='email'
                         placeholder =' Email'
                        onChange={changeHandler} />
        
                  <input className='block w-full rounded-md border-0 py-1.5 text-gray-900
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ' 
                        type="password" 
                        name='password'
                        value={formData.password}
                        placeholder=' password'
                        onChange={changeHandler}/>

                  <input className='block w-full rounded-md border-0 py-1.5 text-gray-900
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ' 
                        type="password" 
                        name='confirmpassword'
                        value={formData.confirmpassword}
                        placeholder=' confirm password'
                        onChange={changeHandler}/>
                  
                  <button className='p-2 hover:bg-slate-400 rounded-xl bg-green-500 mx-auto' >Signup</button>              
                </form>
          </div>                    
    </div>                 
  )
}

export default Signup
