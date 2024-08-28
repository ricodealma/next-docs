"use client";

import { Icon } from "@iconify/react";
import { Box, Grid, IconButton, Skeleton, Typography } from "@mui/material";
import React from "react";

interface Props {
  uri?: string | null;
}

const Uri = ({ uri }: Props) => {
  return (
    <Grid item xs={12}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box maxWidth={"90%"}>
          <Typography variant="body2">Link Original: </Typography>
          {uri ? (
            <Typography noWrap>{uri}</Typography>
          ) : (
            <Skeleton variant="text" width={"100%"} />
          )}
        </Box>
        <IconButton
          aria-label="copy link"
          onClick={() => console.log("copy link")}
          edge="end"
        >
          <Icon icon={"tabler:copy"} color={"var(--primary-main)"} />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default Uri;
