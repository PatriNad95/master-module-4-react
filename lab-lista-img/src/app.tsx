import React from "react";
import { AppRouter } from "@/router";
import { ListModeProvider } from "./core/providers/listMode";
import { CartProvider } from "./core/providers";

export const App = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
};
