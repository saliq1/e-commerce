import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../Components/Cards";
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import ApiCall from "../modules/Apicall";
const Products =()=>{
  let [item,setItem] = useState([])
 
  return(
    <>
    
    <ApiCall calling={(items)=>{setItem(items)}}/>
    
  
  
    <div style={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
     {item.map((value)=>{
      return( <div key={value.id} > 
        <Cards  product = {value}/>

      </div>
    )
     })}

    </div>
     

    </>
  )
}
export default Products