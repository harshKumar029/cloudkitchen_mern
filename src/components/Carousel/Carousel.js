import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css'; // Import the CSS file for styling

function ImageCarousel() {
    return (
        <div className="carousel-container">
            <Carousel showThumbs={false} infiniteLoop autoPlay className="carousel">
                <div>
                    <img src='https://source.unsplash.com/random/900x500/?burger' alt="Image 1" className="carousel-image" />
                </div>
                <div>
                    <img src='https://source.unsplash.com/random/900x500/?pastry' alt="Image 2" className="carousel-image" />
                </div>
                <div>
                    <img src='https://source.unsplash.com/random/900x500/?roll' alt="Image 3" className="carousel-image" />
                </div>
            </Carousel>
            <div className="input-overlay">
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init>Search</button>
                </div>
            </div>
        </div>
    );
}

export default ImageCarousel;
