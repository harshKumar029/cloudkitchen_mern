import React, { useEffect, useState } from 'react';
import './home.css'

import Navbar from '../components/Navbarr/Navbarr'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card';
import Carousel from '../components/Carousel/Carousel';

const Home = () => {
    const [foodCat, setFoodCat] = useState([])
    const [fooditem, setFooditem] = useState([])

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
            <div><Carousel /></div>
            <div className='homcard'>
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (
                                <>
                                    <div key={data._id}>{data.CategoryName}</div>
                                    <hr />
                                    {fooditem !== []
                                        ? fooditem.filter((item) => item.CategoryName == data.CategoryName)
                                            .map(filteritem => {
                                                return (
                                                    <div key={filteritem._id}>
                                                      <Card {...filteritem} />
                                                    </div>
                                                )
                                            })
                                        : <div>No Data Found</div>
                                    }
                                </>
                            )
                        })
                        : <div>''''</div>

                }
            
            </div>
            <div><Footer /></div>
        </>
    )
}

export default Home