import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import PopularProducts from "../PopularProducts";
import { Jordan } from "../../AppData/CategoriesData";
import "../../styles/Categories.scss";

const Category_Jordan = () => {
  return (
    <div>
      <Navbar />
      <h1 className="category_title">Category_Jordan</h1>
      <PopularProducts>{Jordan}</PopularProducts>
      <Footer />
    </div>
  );
};

export default Category_Jordan;
