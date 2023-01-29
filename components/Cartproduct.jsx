import React from "react";

import { Button, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { decrement, deleteCartData, increment } from "@/redux/actions";
import { useDispatch } from "react-redux";

export default function CartProduct({ data, onclick,INC,DEC }) {
  const dispatch=useDispatch()
  
  return (
      <>
        <div className="cart-main">
        <div className="cart-img">
        <img src={data.image} alt="img" />
        </div>
        <div className="cart-details">
          <h2>{data.title}</h2>
          <h2>Rs-{data.price}</h2>
          <span className="quant">Quantity <button className="quant-btn" onClick={()=>{dispatch(decrement(data.id))}}>-</button><span style={{color:"white"}}>{data.quantity}</span><button className="quant-btn" onClick={()=>{dispatch(increment(data.id))}}>+</button></span>
          <h2 className="rating">Ratings- <span>{data.rating}</span></h2>
          
        </div>
        <div style={{marginTop:"8%"}}><Button onClick={()=>dispatch(deleteCartData(data))}   w="100px">Remove</Button></div>
        </div>
      </>
    
  );
}
