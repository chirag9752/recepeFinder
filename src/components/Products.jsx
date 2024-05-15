import React from 'react'
import {useNavigate } from 'react-router-dom'

const Products = ({items}) => {

  const navigate = useNavigate();

  const clickHandler = (items) => {
    console.log('----',items);

      // const {instructions , ingredients} = items;
      navigate("/receipepoint",{state:items});
  }

  return (
    <div>
         
         <div className='hover:scale-110 transition-all ease-in-out p-2 outline-lime-50 shadow-md rounded-sm space-x-2'>
           <div className=''>
                <img onClick={()=>{clickHandler(items)}} src={items.image} className='rounded-lg' alt="images of food" />
            </div>

            <div className='flex gap-2 justify-between p-2'>

               <div className='text-green-700'>
                 rating : {items.rating}
               </div>

               <div className=''>
                    {items.name}
               </div>
               
            </div>

            <div onClick={()=>{clickHandler(items)}} className='pl-1 cursor-pointer text-blue-600'>
                click here to see full receipe
            </div>
         </div>
           
    </div>
  )
}

export default Products
