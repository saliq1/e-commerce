import { useState } from "react"
import ApiClass from "../modules/ApiClass"

const ApiClasshelper =()=>{
  // const [mydata,setMydata] = useState([])
//  ApiClass.getAllProducts((data)=>{
//   setMydata(data)
//  })
let xyz = ApiClass.getProducts()
//  setMydata(xyz)
  return(
    <>
    {xyz.map((v)=>{
      return(
        <li key={v.id}>{v.price}</li>
      )
    })}
    </>
  )
}
export default ApiClasshelper