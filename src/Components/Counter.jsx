import React from "react";
import { useSelector } from "react-redux";
const Counter=()=>{
  let value = useSelector(state=>state)

  return(
    <>
    <h3> {value} </h3>
    </>
  )
}
export default Counter