import React, { createContext, useContext, useState } from "react";

const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItem = (item) => setItems((prev) => [...prev, item]);
  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
}

export function useItems() {
  return useContext(ItemContext);
}
