import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCart from "../components/AddCart";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const RouteFile = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header /> <ProductList />
            </div>
          }
        />
        <Route path="/addtocart" element={<AddCart />} />
      </Routes>
    </>
  );
};

export default RouteFile;
