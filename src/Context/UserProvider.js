import { useState } from "react"
import UserContext from "./UserContext"

let UserProvider = ({children})=>{
  let [user,setUser] = useState()
 return (
  <>
  <UserContext.Provider value = {{user,setUser}}>
    {children}
  </UserContext.Provider>
  </>
 )
}
export default UserProvider;