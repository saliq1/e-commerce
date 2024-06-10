import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import End from "./End"
const Layout = ()=>{
return(
  <>
  <Nav/>
  <Outlet/>
  <br />
  <br />
  <End/>
  </>
)
}
export default Layout