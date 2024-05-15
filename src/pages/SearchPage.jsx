import React, { useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io"
import { ImSpinner11 } from "react-icons/im";
import Products from '../components/Products';

const SearchPage = () => {

    const searchHandler = () => {
           console.log("alkjlsdfh");
    }

    const [loading , setloading] = useState(false);
    const [data, setdata] = useState([]);
    const [searchValue , setsearchValue] = useState('');

    const searchedData = async () => {
        try {
            setloading(true);
            const response = await fetch("https://dummyjson.com/recipes")
            // .then((res)=>res.json()).then((json)=>{
            //     setdata(json.recipes);
            //     console.log(json.recipes)
            // })


            const jsondata = await response.json();
            setdata(jsondata.recipes);
            console.log('----data', data);
           

            // console.log("Data fetched successfully:", jsonData);

        } catch (error) {
            console.error("Error fetching data:", error);
               // Handle errors, such as setting an error state
               // setError(error);
        }
    
        setloading(false);
    }

    useEffect(() => {
        searchedData();
    } , [] );


    const handleSearch = () => {
     const filterData = data.filter( item => 
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        return filterData;
    }

  return (
    <div>
        {/* navigation bar completed */}
         <div className='w-screen h-screen'>
         
              <nav className='h-20 bg-orange-300 w-screen'>
                
                  <div className='relative pt-3 flex justify-between w-[40%] mx-auto'>
                      <input src='text' placeholder = '  search' 
                      className='outline-none flex justify-between w-full font-serif items-center mx-auto h-12 rounded-full'
                      onChange={e => setsearchValue(e.target.value)}
                      />
                      
                      <div className='flex justify-end'>
                        <div></div>
                      
                          <div onChange = {searchHandler} className='text-3xl pt-2 absolute flex justify-between'>
                          <IoMdSearch />
                         </div>
                      </div>
                      
                  </div>
              </nav>

          {/* Fetching data Page */}
          <div className='w-screen h-screen'>
              {
                 loading ? 
                 <div className='flex w-screen h-screen items-center justify-center my-auto mx-auto'>
                    <ImSpinner11 />
                 </div> : 
                 (
                     <div className='grid grid-cols-1 sm:p-2 md:grid-cols-2 lg:grid-cols-4 w-[98%] space-y-7 space-x-7 mx-auto'>
                        {
                             handleSearch().map((items) => 
                            // console.log(items.id)
                            <div key = {items.id}>
                                <Products items = {items} />
                            </div>
                                
                            )
                        }
                        
                     </div>
                    
                 )
              }
          </div>

         </div>

    </div>
  )
}

export default SearchPage


