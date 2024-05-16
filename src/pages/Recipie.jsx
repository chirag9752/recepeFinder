import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Recipie = () => {
  const location = useLocation();
  const data = location.state;
  const [datas,setDatas] = useState(data)
  
  console.log('----dasss',datas)
  
  return (
    <div>
          <div className='text-black relative flex w-screen h-screen  justify-center'> 
             
             <img className='w-screen h-screen' src="https://as2.ftcdn.net/v2/jpg/04/97/43/65/1000_F_497436557_jLI8PUeuE4LEd8BqMfqk72ZhkxonvUkT.jpg" alt="" />
              
              <div className='w-[50%] absolute my-auto sm:top-40 md:top-36 top-56'>

              <div className='w-auto mx-auto p-5' >
                 <p><span className='text-red-600 font-bold text-2xl'>Ingredients</span> : {datas.ingredients}</p>
              </div>

              <br /><br />

            <div className='w-auto mx-auto p-5 '>
                <p> <span className='text-red-600 font-bold text-2xl' >Instructions</span> : {datas.instructions}</p>
            </div>

              </div>
              
          </div>
    </div>
  )
}

export default Recipie
