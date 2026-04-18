import React, { createContext, useContext, useState, ReactNode } from "react";
// import { Dish } from "../data/dishes";

export const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (dish) => {
    // TODO
  };

  const removeFromCart = (dishId) => {
    // TODO
  };

  const updateQuantity = (dishId, quantity) => {
    // TODOs
  };

  const clearCart = () => {
    // TODO
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
