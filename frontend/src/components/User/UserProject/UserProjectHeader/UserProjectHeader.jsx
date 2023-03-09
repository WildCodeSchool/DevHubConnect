import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Chip } from "@mui/material";

const handleClick = () => {
  console.info("You clicked the Chip.");
};

function UserProjectHeader() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        p={1}
      />
      <Typography gutterBottom variant="h1" component="div">
        UserProject
      </Typography>
      <Typography variant="body2" gutterBottom>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={4} p={2}>
          <Chip
            label="Projets en cours"
            size="medium"
            color="primary"
            onClick={handleClick}
          />
          <Chip
            label="Projets à venir"
            size="medium"
            color="primary"
            onClick={handleClick}
          />
          <Chip
            label="Projets non retenus"
            size="medium"
            color="primary"
            onClick={handleClick}
          />
        </Stack>
      </Typography>
    </>
  );
}

export default UserProjectHeader;
