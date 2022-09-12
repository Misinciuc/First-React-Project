import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  padding: 10px 15px;
  font-size: 22px;
  color: #020202;
  cursor: pointer;
`;
const Title = styled.h2`
  color: #095189;
  font-size: 3rem;
  text-align: center;
`;

const Container = styled.div`
  position: relative;
  align-self: center;
  grid-area: ${(props) => props.position};

  &:hover ${Button} {
    scale: 1.2;
    transition: 0.5s;
  }
  &:hover ${Title} {
    scale: 1.2;
    transition: 0.5s;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const WraperMore = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);
`;

const CategoryItem = ({ item }) => {
  return (
    <Container position={item.position}>
      <Img src={item.img}></Img>
      <WraperMore>
        <Title>{item.title}</Title>
        <Button>View more</Button>
      </WraperMore>
    </Container>
  );
};

export default CategoryItem;
