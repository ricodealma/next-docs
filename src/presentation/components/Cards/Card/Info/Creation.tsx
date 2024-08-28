"use client";

import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

interface Props {
  ownerEmail?: string | null;
  date?: Date | null;
}

const Creation = ({ ownerEmail, date }: Props) => {
  return (
    <Grid item xs={12}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Typography variant="body2">Criado Por: </Typography>
          {ownerEmail ? (
            <Typography>{ownerEmail}</Typography>
          ) : (
            <Skeleton variant="text" width={150} />
          )}
        </Box>
        <Box>
          <Typography variant="body2">Em: </Typography>
          {date ? (
            <Typography>{new Date(date).toLocaleString("pt-BR")}</Typography>
          ) : (
            <Skeleton variant="text" width={120} />
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default Creation;
