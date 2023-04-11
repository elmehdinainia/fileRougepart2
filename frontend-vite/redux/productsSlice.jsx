import {createSlice} from "@reduxjs/toolkit"
import {  toast } from 'react-toastify';

const initialState = {
    productList : [],
    cartItem:[]
}

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers:{
        setDataProduct : (state,action)=>{
            // console.log(action)
            state.productList = [...action.payload]
        },
        addCartItem:(state,action)=>{
            // console.log(action)
            const check = state.cartItem.some((el)=>el._id === action.payload._id)
            if(check){
                alert("this product is already exist")
            }else{
                const total = action.payload.price;
                state.cartItem = [
                  ...state.cartItem,
                  { ...action.payload, qty: 1, total:total },
                ];

                 }   
            },

        deletCartItem : (state,action)=>{
            const index = state.cartItem.findIndex((el)=>el._id === action.payload)
            state.cartItem.splice(index,1)
            
        },
        increasQty:(state,action)=>{
            const index = state.cartItem.findIndex((el)=>el._id === action.payload)
             state.cartItem[index].qty
            state.cartItem[index].qty+=1
        },
        descreasQty:(state,action)=>{
            const index = state.cartItem.findIndex((el)=>el._id === action.payload)
            console.log(index)

            const qty = state.cartItem[index].qty
            if(qty>1){
            state.cartItem[index].qty-=1
            }

        }
        
    }

   
})


export const {setDataProduct,addCartItem,deletCartItem,increasQty,descreasQty} = productSlice.actions
export default productSlice.reducer