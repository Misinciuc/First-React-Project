import React from "react";
import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: grid;
  width: 95%;
  margin: 0 auto;
  grid-template-areas:
    "cat1 cat1 cat2 cat2 cat3 cat3 "
    "cat4 cat4 cat4 cat5 cat5 cat5";
  gap: 20px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
