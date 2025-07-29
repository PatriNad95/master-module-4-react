import { ListMode } from "@/core/providers/listMode/list-mode.vm";
import { CenteredLayout } from "@/layout";
import { Stack, Button } from "@mui/material";
import React from "react";

interface Props {
  onSelect: (mode: ListMode) => void;
}

export const HomeComponent: React.FC<Props> = (props) => {
  const { onSelect } = props;

  return (
    <CenteredLayout title="Selecciona una lista">
      <Stack spacing={2}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            onSelect("github");
          }}
        >
          Ver GitHub Organizations
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            onSelect("rickmorty");
          }}
        >
          Ver Rick and Morty
        </Button>
      </Stack>
    </CenteredLayout>
  );
};
