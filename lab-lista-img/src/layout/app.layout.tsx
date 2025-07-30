import { CartScene } from "@/scenes";
import { Box, Paper } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface Props {
  Cart: React.ReactNode;
}

export const AppLayout: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, Cart } = props;
  return (
    <Box display="flex" height="100vh" overflow="hidden">
      <Box flex={1} p={3} overflow="auto">
        {children}
      </Box>
      <Box
        width={300}
        p={2}
        bgcolor="grey.100"
        borderLeft="1px solid #ccc"
        overflow="auto"
        component={Paper}
        square
        elevation={3}
      >
        {Cart}
      </Box>
    </Box>
  );
};
