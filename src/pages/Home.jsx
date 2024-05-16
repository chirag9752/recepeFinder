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
  
  // const goToRecipeHandler = () => {
  //   navigate("/searchpage")
  // }

  return (
        <div >
            <div className=' w-screen h-screen bg-full'
             style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg?w=1380&t=st=1715682720~exp=1715683320~hmac=7051ccb7d44b0e12152e72afc167a749c97dabe0953deca9db01fc782937efb7')`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              }}>
               
               <div className='flex flex-col gap-5 w-[40%] p-3 pt-60'>
                    
                    <h1 className='text-green-600 mx-auto font-bold text-4xl'>Get Started</h1>
                     
                     <div className='flex flex-row gap-5 mx-auto'>
                         <button onClick={goToLoginHandler} className='p-3 rounded-lg  text-black bg-white text-2xl'  >started with login</button>
                         <button onClick={goToSignupHandler}  className='p-3 rounded-lg text-black bg-white text-2xl'  >started with signup</button>
                     </div>
                    
                     {/* <button onClick={goToRecipeHandler} className='p-3 rounded-lg text-black bg-white' >go to search page</button> */}
                </div>
               
            </div>
        </div>
  )
}

export default Home
