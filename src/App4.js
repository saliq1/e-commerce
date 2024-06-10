import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./pages/NotFound";
import Layout from "./Components/Layout";
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Profile"));
const Cart = lazy(() => import("./pages/Cart"));
const Buy = lazy(() => import("./pages/Buy"));
const ProductDetails = lazy(() => import("./pages/ProfileDetails"));
const ProductCategory = lazy(() => import("./pages/ProductCategory"));

const App4 = () => {
  let a = 1;
  let b = [];
  return (
    <>
      <div>
        <Suspense
          fallback={<div style={{  marginTop: "150px",textAlign:"center" }}>Loading...</div>}
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/buy/:id" element={<Buy />} />
              <Route path="/profile/:id" element={<ProductDetails />} />
              <Route path="/home/:category" element={<ProductCategory />} />
            </Route>
            <Route path="*" element={a ? <NotFound /> : <p>a is false</p>} />
            <Route />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
export default App4;
