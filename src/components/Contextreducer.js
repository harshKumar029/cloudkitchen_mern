import React, { createContext, useContext, useReducer } from 'react'

const CartDispatchContext= createContext();
const CartStateContext= createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          { id: action.id, name: action.name, price: action.price,img:action.img, qty: action.qty, size: action.size }
        ];
      default:
        console.log('error in reducer');
        return state; // Make sure to return the state in the default case.
    }
  };
  
export const CardProvider =({children})=>{
    const [state,dispatch]= useReducer(reducer,[])
    return (
        <CartDispatchContext.Provider value={dispatch}>
          <CartStateContext.Provider value={state}>
            {children}
          </CartStateContext.Provider>
        </CartDispatchContext.Provider>
      ) 
} 

export const useCart =()=> useContext(CartStateContext)
export const useDispatchCart =()=> useContext(CartDispatchContext)