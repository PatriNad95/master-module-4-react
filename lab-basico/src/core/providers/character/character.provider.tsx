import React, { PropsWithChildren } from "react";
import { CharacterContextModel } from "./character.vm";

export const CharacterContext =
  React.createContext<CharacterContextModel>(null);

export const CharacterProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [name, setName] = React.useState<string>("");
  return (
    <CharacterContext.Provider value={{ name, setName }}>
      {children}
    </CharacterContext.Provider>
  );
};
