import axios from "axios"
let ApiCall = (props) => {
    axios.get("https://fakestoreapi.com/products")
      .then((item) => {
        props.calling(item.data)
     
  }
      )
}

export default ApiCall