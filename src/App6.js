import { useState } from "react";

const App6 = ()=>{
  const [count,Count] = useState("");
let handleSubmit=(event)=>{
  event.preventDefault()
}
  
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input
      onChange={(event)=>{
        Count(event.target.value)
        console.log(count);
      }}
       type="text"
      value={count}
       placeholder="Enter name"
       />
      <button type="submit">click</button>
    </form>
    <div>{count}</div>
    </>
  )
}
export default App6