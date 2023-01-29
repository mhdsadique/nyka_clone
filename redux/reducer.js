import { Action } from "@remix-run/router"
import {CART_DELETE_DATA,CART_GET_DATA,CART_POST_DATA,DEC,ERROR,GET_DATA,INC,LOADING, TOTAL_AMOUNT} from "./actionTypes"

let initialData={
    data:[],
    cart:[],
    total:0,
    isLoading:false,
    isError:false
}


export const Globalreducer=(state=initialData,{type,payload})=>{
    switch(type){
        case LOADING:{
            return{
                ...state,
                isLoading:true
            }
        }
        case ERROR:{
            return{
                ...state,
                isError:true
            }
        }
        case CART_POST_DATA:{
            return{
                ...state,
                cart:[...state.cart,payload],
                isLoading:false,
                isError:false
                
            }
        }
        case CART_GET_DATA:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                cart:payload,

            }
        }
        case CART_DELETE_DATA:{
            let filtered=state.cart.filter((e)=>{
              return  e.id!==payload.id
            })
            return{
                ...state,
                isLoading:false,
                isError:false,
                cart:filtered
            }
        }
        case INC:{
            let updated=state.cart.map((ele)=>{
                if(ele.id===payload){
                    return{
                        ...ele,
                        quantity:ele.quantity+1
                    }
                }
                return ele
            })
            return{
                ...state,
                cart:updated
            }
        }
        case DEC:{
            let updated=state.cart.map((ele)=>{
                if(ele.id===payload){
                    return{
                        ...ele,
                        quantity:ele.quantity-1
                    }
                }
                return ele
            }).filter((ele)=>{return ele.quantity!=0})
            return{
                ...state,
                cart:updated
            }
        }
        case TOTAL_AMOUNT:{
            let {total}=state.cart.reduce((accum,curVal)=>{
                let {price,quantity}=curVal
                accum.total+=quantity*price
                console.log(accum)
                return accum
            },{total:0})
            return{
                ...state,
                total:total
            }
        }

        default:return state
    }
}
