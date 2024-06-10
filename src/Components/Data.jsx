import { useContext } from "react"
import UserContext from "../Context/UserContext"
let Data =() =>{
let {user} = useContext(UserContext)
if(user==null){
  return <p>enter usernme and password</p>
}
  return(
    <>
    <p>Your username is {user.username}</p>
    <p>Your password is {user.password}</p>
    </>
  )
}
export default Data