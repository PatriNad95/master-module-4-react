import React from "react";
import { Menu } from "./menu.component";
import { ListModeContext } from "@/core/providers/listMode";

export const MenuContainer: React.FC = () => {
  const { mode } = React.useContext(ListModeContext);

  return (
    <>
      <Menu mode={mode} />
    </>
  );
};
