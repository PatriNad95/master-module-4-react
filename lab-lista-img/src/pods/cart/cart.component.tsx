import React from "react";
import { List, ListItem, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  selectedIds: string[];
  removeId: (id: string) => void;
}

export const Cart: React.FC<Props> = (props) => {
  const { selectedIds, removeId } = props;

  const capitalizeFirstLetter = (text: string): string =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  return (
    <div
      style={{ width: 250, padding: 16, position: "fixed", right: 0, top: 0 }}
    >
      <Typography variant="h6">🛒 Carrito</Typography>
      <List>
        {selectedIds.map((id) => (
          <ListItem
            key={id}
            secondaryAction={
              <IconButton edge="end" onClick={() => removeId(id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            {capitalizeFirstLetter(id)}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
