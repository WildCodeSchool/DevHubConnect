import React from "react";
import Stack from "@mui/material/Stack";
import ProjectFormLeft from "./ProjectFormLeft/ProjectFormLeft";
import ProjectFormRight from "./ProjectFormRight/ProjectFormRight";

export default function ProjectFormBody() {
  return (
    <Stack direction="row" justifyContent="space-around" spacing={2}>
      <ProjectFormLeft />
      <ProjectFormRight />
    </Stack>
  );
}
