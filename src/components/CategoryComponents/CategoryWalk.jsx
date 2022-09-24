import React from "react";
import PopularProducts from "../PopularProducts";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Walk } from "../../AppData/CategoriesData";
import "../../styles/Categories.scss";

const Category_Walk = () => {
  return (
    <div>
      <Navbar />
      <h1 className="category_title">Walk Page</h1>
      <PopularProducts>{Walk}</PopularProducts>
      <Footer />
    </div>
  );
};

export default Category_Walk;
