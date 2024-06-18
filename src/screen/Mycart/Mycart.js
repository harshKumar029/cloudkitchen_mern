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
        email: userEmail,        order_date: new Date().toDateString()
      })
    });

    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }
  console.log(data)

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div className='cart-container'>

      <div className='cart-container'>
        <div className='cart-header'>
          <h2>Your Shopping Cart</h2>
          <div style={{width:'25px',height:'25px'}}>
          <svg  onClick={() => { handleClick(); }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </div>
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
          <button onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>
    </div>
  )
}