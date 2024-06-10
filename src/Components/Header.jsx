import { useState,useRef } from "react";
import "../styles/Header.css"

let Header =(props)=>{
  return ( 
    <div className="header">
      <p>left count</p>
      <h3>{props.myCount}</h3>
      <button onClick={()=>{
        props.incre(props.myCount)
      }}>increment</button>
    </div>
    )
}
 
 
 


export default Header