import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from "./Components/Footer"
import Header from "./Components/Header"
import Input from './Components/Input';
import Form from './Components/Form';
import Data from './Components/Data';
import axios from "axios"
import "./styles/Header.css"
import ApiCall from './modules/Apicall';
import UserProvider from './Context/UserProvider';
function App2() {
 
  return (
    <>
    <UserProvider>
    <Form></Form>
       <br></br>
       <Data></Data>
    </UserProvider>
     
    </>
  )
}

export default App2;