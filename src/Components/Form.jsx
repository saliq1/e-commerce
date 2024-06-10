import { useContext, useState } from "react"
import UserContext from "../Context/UserContext"

let Form = ()=>{
  let {setUser}= useContext(UserContext)
  let [username,setUsername]=useState("")
  let [password,setPassword]=useState("")
let handleSubmit = (event)=>{
event.preventDefault()
setUser({username,password})
}
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text"
       autoComplete="off"
       placeholder="User Name"
       onChange={(event)=>{
        setUsername(event.target.value)
       }}
       value={username}
      />
      <br />
      <br />
      <input type="password"
       autoComplete="off"
       placeholder="Password"
       onChange={(event)=>{
        setPassword(event.target.value)
       }}
       value={password}
      />
      <br />
      <br />
      <button type="submit">Render</button>
    </form>
    </>
  )
}
export default Form