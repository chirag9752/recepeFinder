import React from 'react'
import { useNavigate} from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  const goToLoginHandler = () => {
      navigate("/login");
  }

  const goToSignupHandler = () => {
    navigate("/signup");
  }
  
  return (
        <div >
            <div className=' w-screen fixed h-screen bg-full sm:bg-slate-400'
             style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg?w=1380&t=st=1715682720~exp=1715683320~hmac=7051ccb7d44b0e12152e72afc167a749c97dabe0953deca9db01fc782937efb7')`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              }}>


                <h1 className='font-bold pl-5 pt-10 sm:pt-20 text-6xl'>Easy recipes under
                <br />
                 20 mins!</h1>

                <div className='bg-slate-300 top-10 lg:left-[0%] lg:w-[40%] md:w-[50%] md:mx-auto
                 sm:w-[90%] sm:mx-auto hover:shadow-2xl transition-all ease-linear relative flex 
                 justify-center pt-6 h-1/2'>

                 <div className='flex flex-col'>

                 <h1 className='font-bold text-3xl flex justify-center text-black' >Best Recipe</h1>

                 <p className='text-black flex justify-center mt-3' >Good food Good Mood</p>
                 </div>
               
                   <div className='flex flex-col gap-5 w-full absolute p-3 pt-20'>
                    
                    <h1 className='text-green-700 absolute mt-3 flex justify-center w-full font-bold text-4xl'>Get Started </h1>
 
                     <div className='flex pt-[30%] p-10 sm:pt-[15%] flex-col justify-center sm:flex-row sm:justify-around  w-full absolute mx-auto'>

                         <button onClick={goToLoginHandler} 
                         className='p-3 rounded-lg hover:shadow-xl transition-all ease-linear  text-black sm:w-[40%] w-full bg-slate-200 text-2xl'>login</button>

                         <button onClick={goToSignupHandler} 
                          className='p-3 rounded-lg hover:shadow-xl transition-all ease-linear  text-black sm:w-[40%] w-full bg-slate-200 text-2xl'> signup</button>
                          
                         
                     </div>

                 </div>
                
                </div>
               
            </div>
        </div>
  )
}

export default Home
