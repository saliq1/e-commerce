import React, {useEffect, useRef, useState} from "react"
let Input = () => {
  let [name,setName]= useState("My Name Is ")
  let [pass,setPass]= useState()
  useEffect(()=>{
   let into = setInterval(()=>{
      console.log("yoyo");
    },1000)
    
    return ()=>{
      clearInterval(into)
      console.log("cleanUp cslled");
    }
  },[name])
  // let nameRef = useRef("")
  // let passRef = useRef("")
  let handleSubmit =(event)=>{
    // let name = nameRef.current.value
    // let password = passRef.current.type
    event.preventDefault()
    console.log(name);
    console.log(pass);
    // console.log(name);
    // console.log(password);
  }
  let handleNameChange =(event)=>{
    setName(event.target.value)
  }
  let handlePasswordChange =(event)=>{
    setPass(event.target.value)
  }
  return (
    <>
      <h1>info</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">User Name :</label>
        <input value={name} onChange={handleNameChange} name="name" type="text"
          id="name"  />
        <label htmlFor="password">password :</label>
        <input onChange={handlePasswordChange} name="password" type="password" id="password"  />
        <br />
        <button id="submit">submit</button>
      </form>

      <div>
        <h1>your username</h1>
        <p>{name}</p>
      </div>

    </>
  )
}
export default Input