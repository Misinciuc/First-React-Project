import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/CategoryComponents/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PopularProducts from "../components/PopularProducts";
import Slider from "../components/Slider";
import { bestSellers } from "../AppData/bestsellers";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProducts>{bestSellers}</PopularProducts>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
