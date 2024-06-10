import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

function Cards({product}) {
  let item=useSelector((state)=>state)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const handlelick=(product)=>{
    // console.log(product);
    navigate(`/profile/${product.id}`, {state: product})
  
   }
   const handleAddCart=()=>{
    if(item.cart==0){
    dispatch(addItem(product));
    }else{
      let check=item.cart.find((item)=>item.id===product.id)
      if(check){
        alert("already added")
        }else{
          dispatch(addItem({...product,quantity:1}));
        }
    }
    
    
        // if(item.cart.includes(product)){
        //   alert("already added")
        //   // debugger
        //   return
        // }else{
        //   dispatch(addItem(product))
        // }
  
}
   const handleBuyNow=()=>{
    navigate(`/buy/${product.id}`)
   }
  return (
    <>
    
<Card sx={{ maxWidth: 345 }}>
  <CardMedia
    sx={{ height: 140 }}
    image={product.image}
  />
  <CardContent>
    <Typography style={{ overflow: "hidden",
   display: "-webkit-box",
   WebkitLineClamp:"1",
   WebkitBoxOrient:"vertical"}} onClick={()=>{handlelick(product)}} gutterBottom variant="h6" component="div">
      {product.title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      <b> Rs. {product.price} /=</b> 
    </Typography>
    <Typography style={{ overflow: "hidden",
   display: "-webkit-box",
   WebkitLineClamp:"2",
   WebkitBoxOrient:"vertical"}} variant="body2" color="text.secondary">
      {product.description}
    </Typography>
  </CardContent>
  <CardActions>
    <Button onClick={handleBuyNow} size="small" variant="contained" color="success">Buy Now</Button>
    <Button onClick={handleAddCart} size="small" variant="contained" color="error">Add Cart</Button>
  </CardActions>
</Card>

   
    </>
    
  );
}
export default Cards