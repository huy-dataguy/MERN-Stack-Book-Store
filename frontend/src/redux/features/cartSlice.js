import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const existingItem = state.cartItems.find(item => item._id === action.payload._id);
        if(!existingItem){
            state.cartItems.push(action.payload)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item added successfully",
              showConfirmButton: false,
              timer: 1000
            });
        }
        else{
            Swal.fire({
              title: "Item already exists",
              icon: "info",
              timer: 1000

            });
        }
    }
  },
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;