import React from 'react'
import {useNavigate } from 'react-router-dom'

const Products = ({items = items.id !== 1}) => {

  const navigate = useNavigate();

  const clickHandler = (items) => {

      // const {instructions , ingredients} = items;
      navigate("/receipepoint",{state:items});
  }

  return (
    <div>
         
         <div className='p-2 space-x-2 transition-all ease-in-out rounded-sm shadow-md hover:scale-110 outline-lime-50'>
           <div className=''>
                <img onClick={()=>{clickHandler(items)}} src={items.image} className='rounded-lg' alt="images of food" />
            </div>

            <div className='flex justify-between gap-2 p-2'>

               <div className='text-green-700'>
                 rating : {items.rating}
               </div>

               <div className=''>
                    {items.name}
               </div>
               
            </div>

            <div onClick={()=>{clickHandler(items)}} className='pl-1 text-blue-600 cursor-pointer'>
                click here to see full receipe
            </div>
         </div>
           
    </div>
  )
}

export default Products
