import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from "react"
import ApiCall from "../modules/Apicall"
import { useNavigate } from 'react-router-dom';

const Home=()=>{
  let navigate = useNavigate()
  const [item,setItem]=useState([])
  let itemCategory = [];
  item.forEach((value)=>{
    if(!itemCategory.includes(value.category)){
      itemCategory.push(value.category)
    }
  })
  const handleCategory=(event)=>{
    navigate(`/home/${event.target.innerText}`)
  }
  
  
  return (

    <>
    <ApiCall calling={(items)=>{setItem(items)}} />
    <div style={{
      width:"100%"
    }}>
      <img style={{
        width:"100%",
        padding:" 40px 260px"
      }} src="https://miro.medium.com/v2/resize:fit:1400/1*34GfkhLFydPjZWUde1EzRg.jpeg" alt="Home image" />
    </div>
    <div style={{display:"flex",gap:"40px",flexWrap:"wrap",justifyContent:"space-around"}}>
    {itemCategory.map((value,index)=>{
      return (
        <Card key={index} sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image="https://as1.ftcdn.net/v2/jpg/03/34/79/68/1000_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg"
        />
        <CardContent onClick={handleCategory}>
          <Typography gutterBottom variant="h5" component="div">
            {value}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
      )
    })} 
    </div>
    </>
  )
}
export default Home