import { createSlice } from "@reduxjs/toolkit";
 const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart"))||[],
  reducers: {
    clearCart:(state,action)=>{
      return state = [];
    },
    addItem: (state,action)=>{
      state.push(action.payload);
    },
    filterItem:(state,action)=>{
     return state.filter((item)=>{
        return item.id !== action.payload.id;
        })
    },
    updateQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    }

  }
 })
 export const {clearCart,addItem,filterItem,updateQuantity}= cartSlice.actions;
 export default cartSlice.reducer;