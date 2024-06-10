import axios from "axios";

class ApiClass {
  constructor() {
    this.product = [];
  }
  getAllProducts = (callback) => {
    axios.get("https://fakestoreapi.com/products").then((item) => {
      this.product = item.data;
      callback(item.data);
      // debugger;
    });
  };

  getProducts = () => {
    return this.product;
  };
}
export default new ApiClass();
