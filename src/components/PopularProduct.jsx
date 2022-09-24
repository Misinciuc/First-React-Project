import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
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

const PopularProduct = (product) => {
  const { increaseCartQty } = useShoppingContext();

  const addHandleClick = (event) => {
    const mytarget = event.currentTarget;
    mytarget.classList.add("addbtn_anim");
    setTimeout(() => {
      mytarget.classList.remove("addbtn_anim");
    }, 1000);
  };

  const favoriteHandleClick = (event) => {
    event.currentTarget.classList.toggle("favbtn_anim");
  };

  return (
    <Container>
      <Overlay></Overlay>
      <Img src={product.children.img} />
      <Title>{product.children.title}</Title>
      <Info>
        <Icon onClick={addHandleClick}>
          <AddShoppingCart
            onClick={() =>
              increaseCartQty(
                product.children.id,
                product.children.img,
                product.children.title,
                product.children.price
              )
            }
          ></AddShoppingCart>
        </Icon>
        <Icon onClick={favoriteHandleClick}>
          <FavoriteBorder></FavoriteBorder>
        </Icon>
      </Info>
    </Container>
  );
};

export default PopularProduct;
