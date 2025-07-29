import React, { PropsWithChildren } from "react";
import { ListMode, ListModeContextModel } from "./list-mode.vm";
import { HomeScene } from "@/scenes";
import { HomeContainer } from "@/pods/home";
import { Navigate, useLocation } from "react-router-dom";

export const ListModeContext = React.createContext<ListModeContextModel>(null);

export const ListModeProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [mode, setMode] = React.useState<ListMode>();
  const location = useLocation();
  const goHome = !mode && location.pathname !== "/";
  return (
    <ListModeContext.Provider value={{ mode, setMode }}>
      {goHome ? <Navigate to="/" replace /> : children}
    </ListModeContext.Provider>
  );
};
