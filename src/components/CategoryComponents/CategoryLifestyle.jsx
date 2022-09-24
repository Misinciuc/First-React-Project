import React from "react";
import PopularProducts from "../PopularProducts";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Lifestyle } from "../../AppData/CategoriesData";
import "../../styles/Categories.scss";

const Category_Lifestyle = () => {
  return (
    <div>
      <Navbar />
      <h1 className="category_title">LIFESTYLE PAGE</h1>
      <PopularProducts>{Lifestyle}</PopularProducts>
      <Footer />
    </div>
  );
};

export default Category_Lifestyle;
