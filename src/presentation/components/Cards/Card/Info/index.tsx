import { Grid } from "@mui/material";
import React, { ReactNode } from "react";

interface CardDataProps {
  children: ReactNode;
}

const CardInfo = ({ children }: CardDataProps) => {
  return (
    <Grid container spacing={1}>
      {children}
    </Grid>
  );
};

export default CardInfo;
