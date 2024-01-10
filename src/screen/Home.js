import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './home.css'

import Navbar from '../components/Navbarr/Navbarr'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card';
import Carousel from '../components/Carousel/Carousel';

const Home = () => {
    return (
        <>
            <div><Navbar /></div>
            <div><Carousel/></div>
            <div className='homcard'>
               <Card/> 
            </div>
            <div><Footer /></div>
        </>
    )
}

export default Home