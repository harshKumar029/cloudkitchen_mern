import React from 'react'
import './card.css'

const Card = () => {
  return (
    <div className="card">
                    <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">Delicious Pizza</h2>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel elit sit amet libero
                        </p>
                        <div className="card-options">
                            <div className="dropdown">
                                {/* <label htmlFor="quantity">Select Quantity:</label> */}
                                <select id="quantity" >
                                    { Array.from(Array(6),(e,i)=>{
                                        return(
                                            <option key={i+1} value={i+1}>{i+1}</option>
                                        )
                                    })}
                                </select>
                                <select id="size" >
                                    <option value="half">Half</option>
                                    <option value="full">Full</option>
                                </select>
                                <div>Total Price</div>
                                {/* <label htmlFor="quantity">Total Price</label> */}
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Card