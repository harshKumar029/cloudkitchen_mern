import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bun from '../assets/img/bun.webp'
import pizza from '../assets/img/pizza.webp'
import roll from '../assets/img/roll.webp'
import './home.css'

import Navbar from '../components/Navbarr/Navbarr'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card';
import Mycart from './Mycart/Mycart';
// import { search } from '../../backend/Routes/CreateUser';

const Home = () => {
    const [search, setsearch] = useState('')
    const [foodCat, setFoodCat] = useState([])
    const [fooditem, setFooditem] = useState([])

    // http://192.168.1.6:5000/api/orderData

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/fooddata", {
            method: "post",
            header: {
                'content-Type': 'application/json'
            }

        });
        response = await response.json();
        // console.log(response[0],response[1])
        setFooditem(response[0]);
        setFoodCat(response[1]);
    }
    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <div><Navbar /></div>
            <div>
            <div className="carousel-container">
            <Carousel showThumbs={false} infiniteLoop autoPlay className="carousel">
                <div>
                    <img  src={bun} alt="Image 1" className="carousel-image" />
                </div>
                <div>
                    <img  src={pizza} alt="Image 2" className="carousel-image" />
                </div>
                <div>
                    <img  src={roll} alt="Image 3" className="carousel-image" />
                </div>
            </Carousel>
            <div className="input-overlay">
                <div className="input-group">
                    <input type="search" value={search} onChange={(e)=>{setsearch(e.target.value)}}  className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                </div>
            </div>
        </div>
            </div>
            <div className='homcard' >
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (
                                <>
                                    <div key={data._id} >{data.CategoryName}</div>
                                    <hr />
                                    <div className='card_iteem'>
                                    {fooditem !== []
                                        ? fooditem.filter((item) => (item.CategoryName == data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))))
                                            .map(filteritem => {
                                                return (
                                                    <div key={filteritem._id}  >
                                                      <Card  {...filteritem}  />
                                                    </div>
                                                )
                                            })
                                        : <div>No Data Found</div>
                                    }
                                    </div>
                                </>
                            )
                        })
                        : <div>''''</div>
                }
            </div>
            {/* <div><Mycart/></div> */}
            <div><Footer /></div>
        </>
    )
}

export default Home