import React from "react";
import { AppRouter } from "@/router";
import { OrganizationProvider } from "./core/providers";
import { ListModeProvider } from "./core/providers/listMode";

export const App = () => {
  return (
    <OrganizationProvider>
      <AppRouter />
    </OrganizationProvider>
  );
};
