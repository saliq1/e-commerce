import { useContext, useState } from "react"
import { myContext } from "../Context/MyContext"
let User =()=>{
  let {setShade,setUname}=useContext(myContext)
  let [color,setColor] = useState("")
  let [name,setName] = useState("")
 let handleSubmit =(event)=>{
  event.preventDefault()
  setShade(color)
  setUname(name)
 }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder="Enter color"
      autoComplete="off"
      onChange={(event=>{
        setColor(event.target.value)
      })} 
      value={color}/>
      <input type="text"
      placeholder="Enter name"
      autoComplete="off"
      onChange={(event=>{
        setName(event.target.value)
      })} 
      value={name}/>
      <br />
      <br />
      <button type="submit">change</button>
    </form>
    </>
  )
}
let Info = ()=>{
  let {shade,uname}= useContext(myContext)
  if(shade==null&&uname==null){
    return <p>give any color and name</p>
  }
  // let c = "red"
  return (
    <>
    <div style={{
      height:"200px",
      width:"200px",
      backgroundColor: shade
    }}>
      <h3>{uname}</h3>
    </div>
    </>
  )
}
export {User}
export {Info}