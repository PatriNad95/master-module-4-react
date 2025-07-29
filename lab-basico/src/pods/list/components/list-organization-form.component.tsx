import React from "react";
import { Stack, TextField, Button } from "@mui/material";

interface Props {
  org: string;
  setOrg: (org: string) => void;
  goBack: () => void;
}

export const ListOrganizationForm: React.FC<Props> = (props) => {
  const { org, setOrg, goBack } = props;
  const [inputOrg, setInputOrg] = React.useState<string>(org);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOrg(inputOrg);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField
          label="Organización"
          variant="outlined"
          fullWidth
          value={inputOrg}
          onChange={(e) => setInputOrg(e.target.value)}
        />

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="primary" type="submit">
            Buscar
          </Button>
          <Button variant="outlined" color="primary" onClick={goBack}>
            Volver home
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
