import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import Login from './screen/login&signup/Login';
import Signup from './screen/login&signup/Signup';
import { CardProvider } from './components/Contextreducer';
import MyOrder from './screen/MyOrder/MyOrder';

function App() {
  return (
    <>
      <CardProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createuser" element={<Signup />} />
            <Route path='/myOrder' element={<MyOrder/>}/>
          </Routes>
        </BrowserRouter>
      </CardProvider>
    </>
  );
}

export default App;
