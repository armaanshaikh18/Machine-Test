import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddCart from "../components/AddCart";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const RouteFile = () => {
  const [addToCarts, setAddToCart] = useState([]);
  // const [cart, setCart] = useState(
  //   JSON.parse(localStorage.getItem("addToCart"))
  // );
  const [products, setProducts] = useState([]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header
                // cart={cart}
                // setCart={setCart}
                addToCarts={addToCarts}
                setAddToCart={setAddToCart}
              />
              <ProductList
                addToCarts={addToCarts}
                setAddToCart={setAddToCart}
                products={products}
                setProducts={setProducts}
              />
            </div>
          }
        />
        <Route
          path="/addtocart"
          element={
            <AddCart
              // cart={cart}
              // setCart={setCart}
              addToCarts={addToCarts}
              setAddToCart={setAddToCart}
            />
          }
        />
      </Routes>
    </>
  );
};

export default RouteFile;
