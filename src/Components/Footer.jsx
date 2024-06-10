import React, { useState } from "react"
import "../styles/Header.css"
function Footer(props) {
  return (
    
    <div
    className="footer">
      <p>right count</p>
      <h3>{props.myCount}</h3>
      <button onClick={()=>{
        props.decre(props.myCount)
      }}>decrement</button>
    </div>
  )
}

export  {Footer}