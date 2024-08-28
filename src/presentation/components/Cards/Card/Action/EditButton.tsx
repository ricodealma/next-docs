"use client";
import { Button, Grid } from "@mui/material";
import React from "react";

const EditButton = () => {
  return (
    <Grid item xs={12} lg={6}>
      <Button disabled={true} fullWidth variant="outlined">
        Editar
      </Button>
    </Grid>
  );
};

export default EditButton;
