import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Route , Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import SearchPage from './pages/SearchPage';
import Recipie from './pages/Recipie';
import { useEffect, useState } from 'react';

function App() {

  const [isLogin , setisLogin] = useState("token");
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    setisLogin(token);
  } , [])

  return (
      <div>
            <Routes>
                 <Route path='/' element = {<Home/>} />

                 {
                    isLogin ? (
                              <Route path='/searchpage' element = {<SearchPage setisLogin = {setisLogin}/>}/>
                    ) : (
                       <Route></Route>
                    )
                 }

                    <Route path='/login' element = {<Login setisLogin = {setisLogin}/>}/>
                    <Route path='/signup' element =  {<Signup  setisLogin = {setisLogin}/>}/> 
                    <Route path='/receipepoint' element = {<Recipie/>} />
            </Routes>
      </div>
  );
}

export default App;
