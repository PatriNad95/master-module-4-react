import React from "react";
import { Typography, Box, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ListMode } from "./menu.vm";
import { switchRoutes } from "@/router/routes";

interface Props {
  mode: ListMode;
}

export const Menu: React.FC<Props> = (props) => {
  const { mode } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Typography variant="h5">Galería de imágenes</Typography>

      <Stack direction="row" spacing={3}>
        <Link
          component={RouterLink}
          to={switchRoutes.cats}
          underline="hover"
          color={mode === "cats" ? "primary" : "inherit"}
          sx={{
            fontWeight: mode === "cats" ? "bold" : "normal",
            cursor: "pointer",
          }}
        >
          Gatos
        </Link>

        <Link
          component={RouterLink}
          to={switchRoutes.dogs}
          underline="hover"
          color={mode === "dogs" ? "primary" : "inherit"}
          sx={{
            fontWeight: mode === "dogs" ? "bold" : "normal",
            cursor: "pointer",
          }}
        >
          Perros
        </Link>
      </Stack>
    </Box>
  );
};
