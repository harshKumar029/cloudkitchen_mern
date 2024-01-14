import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import Login from './screen/login&signup/Login';
import Signup from './screen/login&signup/Signup';
import { CardProvider } from './components/Contextreducer';

function App() {
  return (
    <>
      <CardProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createuser" element={<Signup />} />

          </Routes>
        </BrowserRouter>
      </CardProvider>
    </>
  );
}

export default App;
