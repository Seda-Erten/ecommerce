import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";
import Categories from "../components/Categories";
import CategoryPage from "../components/CategoryPage"; //

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoryName" element={<CategoryPage />} />{" "}
      <Route path="/product-details/:productId" element={<ProductDetails />} />
    </Routes>
  );
}

export default RouterConfig;
