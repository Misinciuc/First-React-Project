import { Clear } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { useShoppingContext } from "../../context/ContextFunctions";

const CartItem = ({ item }) => {
  const { removeFromCart, decreaseCartQty, increaseCartQty } =
    useShoppingContext();
  const [value, setValue] = useState(item.quantity);

  function checkValueInput(inputValue) {
    setValue(inputValue);
    if (inputValue > item.quantity) {
      increaseCartQty(item.id);
    } else {
      decreaseCartQty(item.id);
    }
  }
  return (
    <div className="cart_item">
      <img src={item.img} alt="dsfdsf" className="cart_item-img" />
      <p className="cart_item-title">{item.title}</p>
      <p className="cart_item-price">{item.price}</p>
      <input
        type="number"
        className="cart_item-qty"
        value={item.quantity}
        onChange={(e) => checkValueInput(e.target.value)}
      />
      <p className="cart_item-subtotal">{item.quantity * item.price}</p>
      <div className="cart_item-btn">
        <Clear
          style={{ color: "#ff0000", cursor: "pointer" }}
          onClick={() => removeFromCart(item.id)}
        ></Clear>
      </div>
    </div>
  );
};

export default CartItem;
