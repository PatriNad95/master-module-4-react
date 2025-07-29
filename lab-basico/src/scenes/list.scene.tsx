import React from "react";
import { ListContainer } from "@/pods/list";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { ListRickMortyContainer } from "@/pods/list/containers/list-rick-morty.container";
import { ListModeContext } from "@/core/providers/listMode";

export const ListScene: React.FC = () => {
  const [selected, setSelected] = React.useState<string>();
  const { mode } = React.useContext(ListModeContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (selected) {
      navigate(routes.detail(selected));
    }
  }, [selected]);
  return (
    <>
      {mode === "github" ? (
        <ListContainer onSelect={setSelected} />
      ) : (
        <ListRickMortyContainer onSelect={setSelected} />
      )}
    </>
  );
};
