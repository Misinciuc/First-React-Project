import React from "react";
import "../styles/Cart.scss";

const CartItemInfo = () => {
  return (
    <div className="cart_placeholder">
      <p className="cart_placeholder-product">Product</p>
      <p className="cart_placeholder-price">Price</p>
      <p className="cart_placeholder-qty">Qty</p>
      <p className="cart_placeholder-subtotal">SubTotal</p>
      <p className="cart_placeholder-action">Action</p>
    </div>
  );
};

export default CartItemInfo;
