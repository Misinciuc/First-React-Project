import { AddShoppingCart, FavoriteBorder, Search } from "@mui/icons-material";
import React from "react";
import "../styles/Cart.scss";
import { useShoppingContext } from "../context/ContextFunctions";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  background-color: #00000025;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
const Info = styled.div`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  opacity: 0;
  cursor: pointer;
`;

const Title = styled.h2`
  color: #000000a3;
  position: absolute;
  top: 20%;
  left: 20%;
  //transform: translateX(-50%);
  opacity: 0;
`;

const Container = styled.div`
  position: relative;
  &:hover ${Overlay} {
    opacity: 1;
    transition: 0.8s ease;
  }
  &:hover ${Info} {
    opacity: 1;
    transition: 0.5s ease;
  }
  &:hover ${Title} {
    opacity: 1;
    transition: 0.5s ease;
  }
`;

const Img = styled.img`
  max-width: 100%;
  display: block;
`;

const Icon = styled.button`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  background-color: white;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopularProduct = ({ product }) => {
  const { increaseCartQty } = useShoppingContext();

  function clearBackground(event) {
    event.currentTarget.classList.remove("rotate-in-ver");
  }

  const handleClick = (event) => {
    event.currentTarget.classList.add("rotate-in-ver");
    setTimeout(clearBackground, 1000);
  };

  return (
    <Container>
      <Overlay></Overlay>
      <Img src={product.img} />
      <Title>{product.title}</Title>
      <Info>
        <Icon onClick={handleClick}>
          <AddShoppingCart
            onClick={() =>
              increaseCartQty(
                product.id,
                product.img,
                product.title,
                product.price
              )
            }
          ></AddShoppingCart>
        </Icon>
        <Icon>
          <FavoriteBorder></FavoriteBorder>
        </Icon>
      </Info>
    </Container>
  );
};

export default PopularProduct;
