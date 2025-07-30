import React, { PropsWithChildren } from "react";
import { ListMode, ListModeContextModel } from "./list-mode.vm";
import { Navigate, useLocation } from "react-router-dom";

export const ListModeContext = React.createContext<ListModeContextModel>(null);

export const ListModeProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const location = useLocation();
  const [mode, setMode] = React.useState<ListMode>("cats");
  const route = location.pathname.replace("/", "") as "cats" | "dogs";
  React.useEffect(() => {
    if (route === "cats" || route === "dogs") {
      setMode(route);
    }
  }, [route]);
  return (
    <ListModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ListModeContext.Provider>
  );
};
