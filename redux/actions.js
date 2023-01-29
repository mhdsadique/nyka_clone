import axios from "axios";
import {
  CART_DELETE_DATA,
  CART_POST_DATA,ERROR,
  CART_GET_DATA,
  DEC, INC,LOADING, TOTAL_AMOUNT,
} from "./actionTypes";

export const Getproddata = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get("https://nykaa-mock-api-6or1.onrender.com/product");
    let data = res.data;
    dispatch({
      type: GET_DATA,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

export const addToCart = (data) => async (dispatch) => {
  //   console.log(typeof data);
  try {
    await axios.post("https://nykaa-mock-api-6or1.onrender.com/cart", data);
    dispatch({ type: CART_POST_DATA, payload: data });
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

export const getCartData = () => async (dispatch) => {
  let res = await axios.get("https://nykaa-mock-api-6or1.onrender.com/cart");

  dispatch({ type: CART_GET_DATA, payload: res.data });
};

export const deleteCartData = (data) => (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = axios.delete(`https://nykaa-mock-api-6or1.onrender.com/cart/${data.id}`);
    dispatch({ type: CART_DELETE_DATA, payload: data });
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

export const increment=(id)=>(dispatch)=>{
  dispatch({type:INC,
            payload:id},)
}
export const decrement=(id)=>(dispatch)=>{
  dispatch({type:DEC,payload:id})
}
export const totalAmount=()=>(dispatch)=>{
  dispatch({type:TOTAL_AMOUNT})
}