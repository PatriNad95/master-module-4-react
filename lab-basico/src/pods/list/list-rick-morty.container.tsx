import React from "react";
import { Member } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./list.repository";
import { OrganizationContext } from "@/core/providers";

interface Props {
  onSelect: (login: string) => void;
}

export const ListRickMortyContainer: React.FC<Props> = (props) => {
  return <>Rick y morty list</>;
};
