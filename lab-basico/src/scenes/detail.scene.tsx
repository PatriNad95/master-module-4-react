import { ListModeContext } from "@/core/providers/listMode";
import { DetailContainer, DetailRickMortyContainer } from "@/pods/detail";
import React from "react";
import { useParams } from "react-router-dom";

export const DetailScene: React.FC = () => {
  const { id } = useParams();
  const { mode } = React.useContext(ListModeContext);

  return (
    <>
      {mode === "github" ? (
        <DetailContainer id={id} />
      ) : (
        <DetailRickMortyContainer id={id} />
      )}
    </>
  );
};
