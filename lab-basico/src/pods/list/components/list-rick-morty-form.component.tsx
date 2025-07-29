import React from "react";
import { Stack, TextField, Button } from "@mui/material";

interface Props {
  filter: string;
  setFilter: (value: string) => void;
  goBack: () => void;
}

export const ListRickMortyForm: React.FC<Props> = (props) => {
  const { filter, setFilter, goBack } = props;

  return (
    <Stack spacing={3}>
      <TextField
        label="Personaje"
        variant="outlined"
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Stack direction="row" justifyContent="center">
        <Button variant="outlined" color="primary" onClick={goBack}>
          Volver home
        </Button>
      </Stack>
    </Stack>
  );
};
