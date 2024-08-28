"use client";
import { Grid } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Action = ({ children }: Props) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};

export default Action;
