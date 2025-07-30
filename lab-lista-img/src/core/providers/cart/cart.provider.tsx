import React, { createContext, useState } from "react";

export const CartContext = createContext<CartContextModel>(null);

export const CartProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleId = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const removeId = (id: string) => {
    setSelectedIds((prev) => prev.filter((item) => item !== id));
  };

  const isSelected = (id: string) => selectedIds.includes(id);

  return (
    <CartContext.Provider
      value={{ selectedIds, toggleId, removeId, isSelected }}
    >
      {children}
    </CartContext.Provider>
  );
};
