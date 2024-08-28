"use client";
import { Button, Grid } from "@mui/material";
import React from "react";

const DownloadButton = () => {
  return (
    <Grid item xs={12} lg={6}>
      <Button disabled={true} fullWidth variant="outlined">
        Baixar
      </Button>
    </Grid>
  );
};

export default DownloadButton;
