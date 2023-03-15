import React from "react";
import Stack from "@mui/material/Stack";
import ProjectFormLeft from "./ProjectFormLeft/ProjectFormLeft";
// import ProjectFormRight from "./ProjectFormRight/ProjectFormRight";

export default function ProjectFormBody() {
  return (
    <Stack spacing={2}>
      <ProjectFormLeft />
      {/* <ProjectFormRight /> */}
    </Stack>
  );
}
