import React from "react";
import { CartContext } from "@/core/providers";
import { PictureInfo } from "../list.vm";
import { List } from "../list.component";

const mockData: PictureInfo[] = [
  {
    id: "dalmata",
    picUrl: "/img/dalmata.png",
    title: "Dálmata",
    selected: false,
  },
  {
    id: "pastor",
    picUrl: "/img/pastor-aleman.png",
    title: "Pastor Alemán",
    selected: false,
  },
  {
    id: "chihuahua",
    picUrl: "/img/chihuahua.png",
    title: "Chihuahua",
    selected: false,
  },
];

export const ListDogsContainer: React.FC = () => {
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
