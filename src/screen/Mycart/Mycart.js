import React from 'react'
// import Delete from '@material-ui/icons/Delete'
import { useCart, useDispatchCart } from '../../components/Contextreducer';
import './mycart.css';
export default function Mycart({ handleClick }) {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    alert("cart is empty")
    handleClick();
    return (
      <div className='cart-container'>
        <div className=''>The Cart is Empty!</div>
      </div>
    )
  }
//   const handleRemove = (index)=>{
//     console.log(index)
//     dispatch({type:"REMOVE",index:index})
//   }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5000/api/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });

    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div className='cart-container'>
      
      <div className='cart-container'>
      <div className='cart-header'>
        <h2>Your Shopping Cart</h2>
        <button style={{backgroundColor:"#ff0000"}} onClick={() => { handleClick(); }} className='btn bg-success'>Close</button>
      </div>
        <table className='cart-table'>
          <thead className=' text'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button onClick={() => { dispatch({ type: "REMOVE", index: index }) }} type="button" className="btn p-0">Delete
                    {/* < onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /> */}
                    </button> </td></tr>
            ))}
          </tbody>
        </table>
        <div className='cart-total'><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div className='cart-total'>
          <button className='  ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    </div>
  )
}