import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";
import Categories from "../components/Categories";
import CategoryPage from "../components/CategoryPage"; // CategoryPage bileşenini import et

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoryName" element={<CategoryPage />} />{" "}
      {/* Kategoriler sayfası */}
      <Route path="/product-details/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default RouterConfig;
