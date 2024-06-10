import { configureStore} from "@reduxjs/toolkit"
import cartSliceReducer from "./slices/cartSlice"

export const store= configureStore({
 reducer: {
     cart: cartSliceReducer,
    }
  })

  store.subscribe(()=>{
    localStorage.setItem("cart", JSON.stringify(store.getState().cart))
  })