import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Chip } from "@mui/material";

function UserProjectHeader() {
  return (
    <>
      <Typography gutterBottom variant="h1" component="div">
        UserProject
      </Typography>
      <Typography variant="body2" gutterBottom>
        <Stack direction="row" spacing={4} p={2}>
          <Chip label="Projets en cours" size="medium" color="primary" />
          <Chip label="Projets à venir" size="medium" color="primary" />
          <Chip label="Projets non retenus" size="medium" color="primary" />
          <Chip label="Tous les projets" size="medium" color="primary" />
        </Stack>
      </Typography>
    </>
  );
}
export default UserProjectHeader;
