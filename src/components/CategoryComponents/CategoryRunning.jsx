import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PopularProduct from "../PopularProduct";
import { Running } from "../../AppData/CategoriesData";
import "../../styles/Categories.scss";

const Category_Running = () => {
  return (
    <div>
      <Navbar />
      <h1 className="category_title">Running</h1>
      <PopularProduct>{Running}</PopularProduct>
      <Footer />
    </div>
  );
};

export default Category_Running;
