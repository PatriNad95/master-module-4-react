import React from "react";
import { CartContext } from "@/core/providers";
import { PictureInfo } from "../list.vm";
import { List } from "../list.component";

const mockData: PictureInfo[] = [
  { id: "romano", picUrl: "/img/romano.png", title: "Romano", selected: false },
  {
    id: "egipcio",
    picUrl: "/img/egipcio.png",
    title: "Egipcio",
    selected: false,
  },
  { id: "persa", picUrl: "/img/persa.png", title: "Persa", selected: false },
];

export const ListCatsContainer: React.FC = () => {
  const { selectedIds, toggleId, isSelected } = React.useContext(CartContext);
  const [pictures, setPictures] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    const withSelection = mockData.map((pic) => ({
      ...pic,
      selected: isSelected(pic.id),
    }));
    setPictures(withSelection);
  }, [selectedIds]);

  const handleToggle = (id: string) => {
    toggleId(id);
  };

  return (
    <>
      <List pictures={pictures} handleToggle={handleToggle} />
    </>
  );
};
