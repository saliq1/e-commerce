import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from "./Components/Footer"
import Header from "./Components/Header"
import Input from './Components/Input';
import axios from "axios"
import "./styles/Header.css"
import ApiCall from './modules/Apicall';
function App() {
  let [count,setCount] = useState(0)
  let [item,setItem] = useState([])
  let handleIncrement=()=>{
    setCount(count+1)
  }
  let handleIncre=(value)=>{
    setCount(value+1)
  }
  let handleDecre=(value)=>{
    setCount(value-1)
  }

  return (
    <>
    <div>
      <h3 className='topText'>Count : {count}</h3>
      <button onClick={handleIncrement}>increment</button>
    </div>
      <div className='base'>
        <Header myCount = {count} incre ={handleIncre} />
        <Footer myCount = {count} decre ={handleDecre} />
        <ApiCall calling = {(items)=>{setItem(items)}}/>
      </div>
      {item.map((value,index)=>{
        return(
          <div key={index}>
            <h4>title : {value.name}</h4>
          </div>
        )
      })}

    </>
  )
}

export default App;
