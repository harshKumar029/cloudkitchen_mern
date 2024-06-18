import React,{useEffect, useRef, useState} from 'react'
import './card.css'
import { useDispatchCart,useCart } from '../Contextreducer';


const Card = ( props) => {
     let options= props.options[0]; //GETTING PROPS DATA FROM HOME.JS
    let priceoption = Object.keys(options);
    let dispatch =useDispatchCart();
    let data=useCart();
    const priceRef=useRef();
//     console.log(dispatch);
//   console.log(options)
  const [qty, setqty] = useState(1)
  const [size, setsize] = useState("")
  const handleAddToCart= async()=>{
      await dispatch({type:"ADD",
      id:props._id,name:props.name,price: finalPrice,qty:qty,size:size})
  }

  let finalPrice =qty* parseInt(options[size]);
  
  useEffect(()=>{
    setsize(priceRef.current.value)
  },[])




  return (
    <div className="card">
                    <img src={props.img} alt="Pizza" className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">{props.name}</h2>
                        <div className="card-options">
                            <div className="dropdown">
                                {/* <label htmlFor="quantity">Select Quantity:</label> */}
                                <select id="quantity" onChange={(e)=>{setqty(e.target.value)}} >
                                    { Array.from(Array(6),(e,i)=>{
                                        return(
                                            <option key={i+1} value={i+1}>{i+1}</option>
                                        )
                                    })}
                                </select>
                                <select id="size" ref={priceRef} onChange={(e)=>{setsize(e.target.value)}}>
                                    {priceoption.map((data)=>{
                                        return <option key={data} value={data}>{data}</option>
                                    })}
                                    {/* <option value="half">Half</option>
                                    <option value="full">Full</option> */}
                                </select>
                                <div>{finalPrice}/-</div>
                                {/* <label htmlFor="quantity">Total Price</label> */}
                            </div>
                        </div>
                           <div className='addtocart'>
                           <button onClick={handleAddToCart}>Add to Cart</button>
                           </div>
                        
                    </div>
                </div>
  )
}

export default Card