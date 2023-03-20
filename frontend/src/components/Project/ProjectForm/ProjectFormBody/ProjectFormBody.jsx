import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ProjectFormLeft from "./ProjectFormLeft/ProjectFormLeft";
import ProjectFormRight from "./ProjectFormRight/ProjectFormRight";

export default function ProjectFormBody() {
  return (
    <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={2}>
      <Box sx={{ width: "100%" }}>
        <Stack alignItems="center">
          <ProjectFormLeft />
        </Stack>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Stack alignItems="center">
          <ProjectFormRight />
        </Stack>
      </Box>
    </Stack>
  );
}
