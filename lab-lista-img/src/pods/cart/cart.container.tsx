import React from "react";
import { Cart } from "./cart.component";
import { CartContext } from "@/core/providers";

export const CartContainer: React.FC = () => {
  const { selectedIds, removeId } = React.useContext(CartContext);

  return (
    <>
      <Cart selectedIds={selectedIds} removeId={removeId} />
    </>
  );
};
