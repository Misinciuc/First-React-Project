import React from "react";
import styled from "styled-components";
import { bestSellers } from "../AppData/bestsellers";
import PopularProduct from "./PopularProduct";

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;

const Button = styled.button`
  display: block;
  text-align: center;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  background-color: #62a4de;
  border: none;
  margin: 0 auto;
  :hover {
    background-color: #1067be;
  }
`;

const PopularProducts = () => {
  return (
    <div>
      <Container>
        {bestSellers.map((product) => {
          return (
            <PopularProduct product={product} key={product.id}></PopularProduct>
          );
        })}
      </Container>
      <Button>See More</Button>
    </div>
  );
};

export default PopularProducts;
