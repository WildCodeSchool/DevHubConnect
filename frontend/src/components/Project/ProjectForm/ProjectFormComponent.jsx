import React from "react";
import Stack from "@mui/material/Stack";
import ProjectFormHeading from "./ProjectFormHeading/ProjectFormHeading";
import ProjectFormBody from "./ProjectFormBody/ProjectFormBody";

export default function ProjectFormComponent() {
  return (
    <Stack spacing={2}>
      <ProjectFormHeading />
      <ProjectFormBody />
    </Stack>
  );
}
