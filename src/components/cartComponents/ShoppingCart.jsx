import React, { useEffect, useState } from "react";
import { useShoppingContext } from "../../context/ContextFunctions";
import CartItem from "../cartComponents/CartItem";
import "../../styles/Cart.scss";
import CartItemInfo from "../cartComponents/CartItemInfo";

const ShoppingCart = () => {
  const { cartItems } = useShoppingContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cartTotal = 0;
    cartItems.forEach((element) => {
      cartTotal += element.quantity * element.price;
      setTotal(cartTotal);
    });
  }, [cartItems]);

  return (
    <div className="cart">
      {cartItems.length !== 0 ? <CartItemInfo /> : <div></div>}
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}

      {cartItems.length !== 0 ? (
        <p className="cart_total">Total: {total}</p>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default ShoppingCart;
