// import Navbar from './navbar';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from "./home"
import About from "./about"
import Service from "./service"
import Contact from "./contact"
import './App.css'
import React from 'react';
// import Footer from './footer';


function App() {
  return (
    <div className="App">
      {<BrowserRouter>
      <Routes> 
       <Route path='/'element={<Home/>}/>
       <Route path='/about'element={<About/>}/>
       <Route path='/service'element={<Service/>}/>
       <Route path='/contact'element={<Contact/>}/>
       </Routes>
       </BrowserRouter> }

       

  
    </div>
  );
}

export default App;
