import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import PopularProducts from "../PopularProducts";
import { Football } from "../../AppData/CategoriesData";

const Category_Football = () => {
  return (
    <div>
      <Navbar />
      <h1 className="category_title">Category_Football</h1>
      <PopularProducts>{Football}</PopularProducts>
      <Footer />
    </div>
  );
};

export default Category_Football;
