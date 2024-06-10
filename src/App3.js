import { User, Info } from "./Components/User"
import { MyProvider } from "./Context/MyProvider"
let App3 = () => {

  return (
    <>
      <MyProvider>
        <User />
        <Info />
      </MyProvider>

    </>
  )
}
export default App3