import React from "react";
import { Container, Box, Typography, Paper } from "@mui/material";

interface BoxLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const BoxLayout: React.FC<BoxLayoutProps> = ({ title, children }) => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="40vh"
      >
        <Paper elevation={3} sx={{ p: 4, width: "100%" }}>
          {title && (
            <Typography variant="h5" gutterBottom textAlign="center">
              Buscar {title}
            </Typography>
          )}
          {children}
        </Paper>
      </Box>
    </Container>
  );
};
