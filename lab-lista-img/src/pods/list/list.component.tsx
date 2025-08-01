import React from "react";
import Grid from "@mui/material/Grid";
import { Picture } from "./components/picture.component";
import { PictureInfo } from "./list.vm";

interface Props {
  pictures: PictureInfo[];
  handleToggle: (id: string) => void;
}

export const List: React.FC<Props> = ({ pictures, handleToggle }) => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {pictures.map((picture) => (
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <Picture picture={picture} onToggle={handleToggle} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
