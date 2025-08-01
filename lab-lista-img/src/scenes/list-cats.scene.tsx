import { ListCatsContainer } from "@/pods/list/containers";
import { MenuContainer } from "@/pods/menu";
import React from "react";

export const ListCatsScene: React.FC = () => {
  return (
    <>
      <MenuContainer />
      <ListCatsContainer />
    </>
  );
};
