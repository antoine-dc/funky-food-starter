import React, { createContext, useContext, useState, ReactNode } from "react";
// import { Dish } from "../data/dishes";

export const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (dish) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.dish.id === dish.id,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { dish, quantity: 1 }];
    });
  };

  const removeFromCart = (dishId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.dish.id !== dishId),
    );
  };

  const updateQuantity = (dishId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.dish.id === dishId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setItems([]);
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
