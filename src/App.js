import React from 'react';
import {  Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import Login from './screen/login&signup/Login';
import Signup from './screen/login&signup/Signup';

function App() {
  return (
   <BrowserRouter>
      {/* <div> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createuser" element={<Signup/>}/>
          
        </Routes>
      {/* </div> */}
   </BrowserRouter>
  );
}

export default App;
