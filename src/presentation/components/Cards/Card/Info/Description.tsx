"use client";

import { Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

interface Props {
  description?: string | null;
}

const Description = ({ description }: Props) => {
  return (
    <Grid item xs={12}>
      <Typography variant="body2">Descrição: </Typography>
      {description ? (
        <Typography noWrap>{description}</Typography>
      ) : (
        <Skeleton variant="text" width={"100%"} />
      )}
    </Grid>
  );
};

export default Description;
