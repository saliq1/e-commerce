import React from "react"
import Counter from "./Components/Counter"
import { useDispatch } from "react-redux"
const App7=()=>{
  let dispatch = useDispatch()
  return(
    <>
    <div style={{display:"flex",justifyContent:"center", alignItems:"center",gap:"20px"}}>
    <button onClick={()=>{dispatch({type:"INCREMENT"})}}>+</button>
    <Counter/>
    <button onClick={()=>{dispatch({type:"DECREMENT"})}}>-</button>
    </div>
    </>
  )
}
export default App7