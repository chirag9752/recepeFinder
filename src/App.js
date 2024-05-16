import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Route , Routes, useNavigate } from 'react-router-dom';
import Signup from './pages/Signup';
import SearchPage from './pages/SearchPage';
import Recipie from './pages/Recipie';
import { useState } from 'react';

function App() {

  const [isLogin , setisLogin] = useState(false);
  const navigate = useNavigate();

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
