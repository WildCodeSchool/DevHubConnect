import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ProjectFormLeft from "./ProjectFormLeft/ProjectFormLeft";
import ProjectFormRight from "./ProjectFormRight/ProjectFormRight";

export default function ProjectFormBody() {
  return (
    <Stack direction="row">
      <Box sx={{ width: "50%" }}>
        <Stack alignItems="center">
          <ProjectFormLeft />
        </Stack>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Stack alignItems="center">
          <ProjectFormRight />
        </Stack>
      </Box>
    </Stack>
  );
}
