import { useState } from "react"
import { myContext } from "./MyContext"
let MyProvider = ({ children }) => {
let [ shade ,setShade] = useState()
let [ uname ,setUname] = useState()

  return (
    <>
      <myContext.Provider value = {{shade,setShade,uname,setUname}}>
        {children}
      </myContext.Provider>
    </>
  )

}
export {MyProvider}