import { Box, Container, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface CenteredLayoutProps {
  title: string;
}

export const CenteredLayout: React.FC<
  PropsWithChildren<CenteredLayoutProps>
> = (props) => {
  const { title, children } = props;
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        {children}
      </Box>
    </Container>
  );
};
