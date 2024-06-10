import { Button, TableCell, TableRow } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { filterItem , updateQuantity} from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const CartItem =({product})=>{
let [cont,setCont]= useState(1);
let navigate = useNavigate()
let items = useSelector(state=>state)
let itemCart = items.cart;

const handleQuantityChange = (event) => {
  const newQuantity = parseInt(event.target.value, 10);
  if (newQuantity > 0) {
    dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
  }
};

let dispatch = useDispatch()
  return(
    <>
    <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img style={{height:"150px"}} src={product.image} alt="Product image" />
              </TableCell>
              <TableCell align="left"><h4>{product.title}</h4></TableCell>
              <TableCell align="left"><h6>Rs.{product.price*product.quantity} /=</h6>
              <label style={{fontSize:"12px"}} htmlFor="contity">conty.</label>
              <input    type="number"
          value={product.quantity}
          onChange={handleQuantityChange}
          style={{ width: "50px" }}
        /> 
              </TableCell>
              <TableCell style={{fontSize:"12px"}} align="left">{product.description}</TableCell>
              <TableCell align="right"> <span onClick={()=>{ dispatch(filterItem(product))}}><DeleteForeverIcon  color="error"/></span>
              <div><Button onClick={()=>{
                navigate(`/buy/${product.id}`)
              }} variant="contained" size="small" color="success">Buy Now</Button></div> </TableCell>
            </TableRow>
            
    </>
  )
}
export default CartItem