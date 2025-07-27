import { ListModeContext } from "@/core/providers/listMode";
import React from "react";

import { useNavigate } from "react-router-dom";

export const HomeScene = () => {
  const navigate = useNavigate();
  const { setMode } = React.useContext(ListModeContext);

  return (
    <>
      <button
        onClick={() => {
          setMode("github");
          navigate("/list");
        }}
      >
        Ver GitHub
      </button>

      <button
        onClick={() => {
          setMode("rickmorty");
          navigate("/list");
        }}
      >
        Ver Rick and Morty
      </button>
    </>
  );
};
