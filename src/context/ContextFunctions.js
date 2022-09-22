import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export const ShoppingContext = createContext();
export function useShoppingContext() {
  return useContext(ShoppingContext);
}

export function ShoppingContextProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);

  const cartQty = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  function getItemQty(id) {
    return cartItems.find((item) => item.id === id).quantity || 0;
  }
  function decreaseCartQty(id) {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id).quantity === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function increaseCartQty(id, img, title, price) {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem, { id, quantity: 1, img, title, price }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id) {
    setCartItems((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  }
  return (
    <ShoppingContext.Provider
      value={{
        getItemQty,
        increaseCartQty,
        decreaseCartQty,
        removeFromCart,
        cartItems,
        cartQty,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
