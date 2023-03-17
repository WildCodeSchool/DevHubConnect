import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";

function ProjectFormToggle() {
  return (
    <Box>
      <Stack direction="row" justifyContent="flex-start" sx={{ ml: 5 }}>
        <Typography>Fermé</Typography>
        <Switch />
        <Typography>Ouvert</Typography>
      </Stack>
    </Box>
  );
}

export default ProjectFormToggle;
