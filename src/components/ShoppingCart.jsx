import React from "react";
import { useShoppingContext } from "../context/ContextFunctions";
import CartItem from "./CartItem";
import "../styles/Cart.scss";
import CartItemInfo from "./CartItemInfo";

const ShoppingCart = () => {
  const { cartItems } = useShoppingContext();
  return (
    <div className="cart">
      {cartItems.length !== 0 ? <CartItemInfo /> : <div></div>}
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
};
export default ShoppingCart;
