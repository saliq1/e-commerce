import { Button, Grid } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterItem, clearCart } from "../redux/slices/cartSlice";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import CartItem from "../Components/Cartitemmm";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const calculateTotal = () => {
      let newTotal = 0;
      items.forEach((item) => {
        newTotal += item.price*item.quantity;
      });
      setTotal(newTotal);
    };

    calculateTotal();
  }, [items]);

  if (items.length === 0) {
    return <h4 style={{ textAlign: "center" }}>Cart is empty</h4>;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><h5>Product</h5></TableCell>
              <TableCell align="left"><h5>Name</h5></TableCell>
              <TableCell align="left"><h5>Price</h5></TableCell>
              <TableCell align="left"><h5>Description</h5></TableCell>
              <TableCell align="right"><h5>Remove Item</h5></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((v) => (
              <CartItem key={v.id} product={v} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "30px" }}>
        <Button onClick={() => { dispatch(clearCart()); }} color="error" variant="contained">Clear Cart</Button>
        <div>
          <h2>Total Amount</h2>
          <h4>{total}</h4>
        </div>
      </div>
    </>
  );
};

export default Cart;