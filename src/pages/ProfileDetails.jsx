import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ApiCall from "../modules/Apicall";
import { Button, Card, Grid, Typography } from "@mui/material";
import Cards from "../Components/Cards";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
const ProductDetails = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let [item, setItem] = useState([]);
  let location = useLocation();
  let [info, setInfo] = useState({});
  useEffect(() => {
    setInfo(location.state);
  }, [location.state.id]);
  let { id } = useParams();
 

  return (
    <>
      <ApiCall
        calling={(items) => {
          setItem(items);
        }}
      />
      <Grid container gap={3}>
        <Grid item xs={12} md={5}>
          <div style={{padding:"0px 50px",display:"flex",alignItems:"center",justifyContent:'center'}}>
            {item.map((value)=>{
              return value.id==id?(
                <img key={value.id} style={{height:"100%",width:"100%"}} src={value.image} alt={value.title} />
              ):null;
            })}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
        {item.map((value) => {
            return value.id == id ? (
              <div style={{padding:"20px"}} key={value.id}>
                <h3>{value.title}</h3>
                <h5> Price Rs. {value.price} /=</h5>
                <p>{value.description}</p>
                <div style={{display:"flex",alignItems:"center",justifyContent:'start',gap:"30px"}}>
                <Button onClick={()=>{ navigate(`/buy/${value.id}`)}} variant="contained" color="success">Buy Now</Button>
                <Button onClick={()=>{dispatch(addItem({...value,quantity:1}))}} variant="contained" color="error">Add Cart</Button>
                </div>
              </div>
            ) : null;
          })}
        </Grid> 
      </Grid>

      <div style={{display:"flex",gap:"40px",flexWrap:"wrap",padding:"30px"}}>
        {item.map((value)=>{
            return (value.category==info.category?(<Cards key={value.id}  product = {value}/>):null)
        })}
      </div>
    </>
  );
};
export default ProductDetails;
