import React from 'react'
import './card.css'

const Card = ( props) => {
  let options= props.options[0];
  let priceoption = Object.keys(options);
  console.log(priceoption);


  return (
    <div className="card">
                    <img src={props.img} alt="Pizza" className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">{props.name}</h2>
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
                                    {priceoption.map((data)=>{
                                        return <option key={data} value={data}>{data}</option>
                                    })}
                                    {/* <option value="half">Half</option>
                                    <option value="full">Full</option> */}
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