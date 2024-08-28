"use client";

import { accessTypeEnum } from "@/domain/enums";
import { Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

interface Props {
  accessTypeId?: string | null;
}

const Visibility = ({ accessTypeId }: Props) => {
  return (
    <Grid item xs={12}>
      <Typography variant="body2">Visibilidade: </Typography>
      {accessTypeId ? (
        <Typography noWrap>{accessTypeEnum[accessTypeId]}</Typography>
      ) : (
        <Skeleton variant="text" width={100} />
      )}
    </Grid>
  );
};

export default Visibility;
