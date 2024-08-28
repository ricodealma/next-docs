import { Badge, Box, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

interface Props {
  id?: string | null;
  active?: boolean | null;
}

const ActiveId = ({ id, active }: Props) => {
  return (
    <Grid item xs={12}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box maxWidth={"70%"}>
          <Typography variant="body2">Identificador:</Typography>
          {id ? (
            <Typography>{id}</Typography>
          ) : (
            <Skeleton variant="text" width={100} />
          )}
        </Box>
        <Box display="flex" alignItems="center">
          {active !== null && active !== undefined ? (
            <>
              <Typography align="center">
                {active ? "Ativo" : "Inativo"}
              </Typography>
              <Badge
                sx={{ ml: 1.25, mr: 0.75 }}
                color={active ? "success" : "error"}
                variant="dot"
              />
            </>
          ) : (
            <Skeleton variant="text" width={50} />
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default ActiveId;
