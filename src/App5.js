import React from "react";
import { useEffect, useState } from "react"
import ApiClass from "./modules/ApiClass"
import ApiClasshelper from "./Components/ApiClasshelper";

let App5 = ()=>{
 let [value1,setValue1]= useState([]);
//  let product1;
 
useEffect(()=>{
   
   ApiClass.getAllProducts( (data)=>{
      setValue1(data)
     
        console.log(value1);
        // debugger;

      
    
   })
  },[])
  // console.log(product1);
  let xyz= ApiClass.getProducts()
  //  debugger
  // let abc = product1.product;
    return(
      <>
      {value1.map((v)=>{
        return(
              <li key={v.id}>{v.title}</li> 
        )
      })}
      {xyz.map((v)=>{
        return(
              <li key={v.id}>{v.id}</li> 
        )
      })}
      <ApiClasshelper/>
      </>
    )
}
export default App5