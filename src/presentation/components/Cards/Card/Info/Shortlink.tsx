"use client";

import { Icon } from "@iconify/react";
import { Box, Grid, IconButton, Skeleton, Typography } from "@mui/material";
import React from "react";

interface Props {
  shortlink?: string | null;
}

const Shortlink = ({ shortlink }: Props) => {
  return (
    <Grid item xs={12}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Typography variant="body2">Shortlink: </Typography>
          {shortlink ? (
            <Typography>{shortlink}</Typography>
          ) : (
            <Skeleton variant="text" width={200} />
          )}
        </Box>
        <IconButton
          aria-label="copy shortlink"
          onClick={() => console.log("copy")}
          edge="end"
        >
          <Icon icon={"tabler:copy"} color={"var(--primary-main)"} />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default Shortlink;
