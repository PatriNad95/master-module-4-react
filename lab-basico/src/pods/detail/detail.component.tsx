import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";
import { MemberDetail } from "./detail.vm";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  member: MemberDetail;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 4, p: 2 }}>
      <CardMedia
        component="img"
        image={member.avatarUrl}
        alt={`${member.name} avatar`}
        sx={{ borderRadius: 2, maxHeight: 300, objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {member.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>ID:</strong> {member.id}
        </Typography>
        {member.login && (
          <Typography variant="body2" color="text.secondary">
            <strong>Login:</strong> {member.login}
          </Typography>
        )}
      </CardContent>

      <Stack direction="row" justifyContent="center" mb={2}>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to={routes.list}
        >
          Volver a la lista
        </Button>
      </Stack>
    </Card>
  );
};
