import { useParams } from "react-router-dom";
import ApiCall from "../modules/Apicall";
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
const Buy = ()=>{
  let {id}=useParams()
  const [item,setItem]=useState([])
  // const [orderedproduct,setOrderedproduct]=useState({})

  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")
  const [address,setAddress]=useState("")
  const [phone,setPhone]=useState("")
  let orderedproduct=item.find((v)=>{return v.id==id})
  let handlePlaceOrder=()=>{
    console.log(orderdetails);
    if(firstname==""||lastname==""||email==""||address==""||phone==""){
      alert("Please fill all the fields")
    }
    else{
      alert("Order placed Succesessfully.")
    }
  }
  let orderdetails ={
    product: orderedproduct,
    name: firstname + lastname,
    personPhone: phone,
    personEmail: email,
    personAddress: address
  }
  return (
    <>
    <ApiCall calling={(items)=>{setItem(items)}}/>
    <h3>Enter your details</h3>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} label="First Name" variant="filled" />
      <TextField value={lastname} onChange={(e)=>{setLastname(e.target.value)}} label="Last Name" variant="filled" />
      <br />
      <TextField value={phone} onChange={(e)=>{
        setPhone(e.target.value)
      }} label="Phone no." variant="filled"  />
      <br />
      <TextField value={email} onChange={(e)=>{
        setEmail(e.target.value)
      }} label="Email" variant="filled" type="email" />
      <br />
      <TextField value={address} onChange={(e)=>{
        setAddress(e.target.value)
      }} label="Address" variant="filled" />
    </Box>
    <Button style={{marginLeft:"40px"}} onClick={handlePlaceOrder} variant="contained" color="error">Place Order</Button>
    </>
  )
}
export default Buy;