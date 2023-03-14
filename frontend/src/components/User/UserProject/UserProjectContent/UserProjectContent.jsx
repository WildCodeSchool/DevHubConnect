import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import UserProjectCurrent from "./UserProjectCurrent/UserProjectCurrent";
import UserProjectUpComing from "./UserProjectUpComing/UserProjectUpComing";
import UserProjectNotSelected from "./UserProjectNotSelected/UserProjectNotSelected";
import UserProjectAll from "./UserProjectAll/UserProjectAll";

function UserProjectContent() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={4} p={2}>
        <Button variant="outlined" size="small" href="#InProgress">
          Projets en cours
        </Button>
        <Button variant="outlined" size="small" href="#Pending">
          Projets à venir
        </Button>
        <Button variant="outlined" size="small" href="#Abandoned">
          Projets non retenus
        </Button>
        <Button variant="outlined" size="small" href="#All">
          Tous les projets
        </Button>
      </Stack>
      <Stack>
        <UserProjectCurrent />
        <UserProjectUpComing />
        <UserProjectNotSelected />
        <UserProjectAll />
      </Stack>
    </Box>
  );
}

export default UserProjectContent;
