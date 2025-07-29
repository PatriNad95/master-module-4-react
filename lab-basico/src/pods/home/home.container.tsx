import { ListModeContext } from "@/core/providers/listMode";
import { CenteredLayout } from "@/layout";
import { Container, Typography, Stack, Button } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";
import { HomeComponent } from "./home.component";
import { ListMode } from "@/core/providers/listMode/list-mode.vm";
import { switchRoutes } from "@/router/routes";

export const HomeContainer: React.FC = () => {
  const navigate = useNavigate();
  const { setMode } = React.useContext(ListModeContext);

  const onSelect = (mode: ListMode) => {
    setMode(mode);
    navigate(switchRoutes.list);
  };

  return <HomeComponent onSelect={onSelect} />;
};
