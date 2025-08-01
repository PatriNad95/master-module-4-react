import React from "react";
import { PictureInfo } from "../list.vm";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Checkbox,
} from "@mui/material";

interface Props {
  picture: PictureInfo;
  onToggle: (id: string) => void;
}

export const Picture: React.FC<Props> = (props) => {
  const { picture, onToggle } = props;

  const handleChange = () => {
    onToggle(picture.id);
  };
  return (
    <Card sx={{ position: "relative" }}>
      <CardMedia component="img" image={picture.picUrl} height="400" />
      <CardContent>
        <Typography variant="subtitle1">{picture.title}</Typography>
        <Checkbox
          checked={picture.selected}
          onChange={handleChange}
          sx={{ position: "absolute", top: 0, right: 0 }}
        />
      </CardContent>
    </Card>
  );
};
