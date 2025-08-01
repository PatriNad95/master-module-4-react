import { ListDogsContainer } from "@/pods/list/containers";
import { MenuContainer } from "@/pods/menu";
import React from "react";

export const ListDogScene: React.FC = () => {
  return (
    <>
      <MenuContainer />
      <ListDogsContainer />
    </>
  );
};
