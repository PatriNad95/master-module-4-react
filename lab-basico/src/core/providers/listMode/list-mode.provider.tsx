import React, { PropsWithChildren } from "react";
import { ListMode, ListModeContextModel } from "./list-mode.vm";

export const ListModeContext = React.createContext<ListModeContextModel>(null);

export const ListModeProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [mode, setMode] = React.useState<ListMode>();
  return (
    <ListModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ListModeContext.Provider>
  );
};
