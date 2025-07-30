import React from "react";
import { AppRouter } from "@/router";
import { CharacterProvider, OrganizationProvider } from "./core/providers";

export const App = () => {
  return (
    <OrganizationProvider>
      <CharacterProvider>
        <AppRouter />
      </CharacterProvider>
    </OrganizationProvider>
  );
};
