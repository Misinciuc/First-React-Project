import React from "react";
import styled from "styled-components";

import PopularProduct from "./PopularProduct";

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;

const PopularProducts = ({ children }) => {
  return (
    <div>
      <Container>
        {children.map((product) => {
          return <PopularProduct key={product.id}>{product}</PopularProduct>;
        })}
      </Container>
    </div>
  );
};

export default PopularProducts;
