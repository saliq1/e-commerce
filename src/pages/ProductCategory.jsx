import { useState } from "react";
import ApiCall from "../modules/Apicall";
import { useNavigate, useParams } from "react-router-dom";
import Cards from "../Components/Cards";

const ProductCategory=()=>{
  let navigate = useNavigate()
  let {category}= useParams();
  console.log(category);
  const [item,setItem]=useState([])
  return(
    <>
    <ApiCall calling={(items)=>{setItem(items)}}/>
    <div style={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
    {item.map((value)=>{
  if(value.category==category){
    return(
      <div key={value.id} > 
        <Cards  product = {value}/>
      </div>
    )  }
    })}
         </div>
    </>
  )
}
export default ProductCategory;