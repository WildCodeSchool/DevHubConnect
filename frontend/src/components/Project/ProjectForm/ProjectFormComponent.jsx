import React from "react";
import Stack from "@mui/material/Stack";
import ProjectFormHeading from "./ProjectFormHeading/ProjectFormHeading";
import ProjectFormBody from "./ProjectFormBody/ProjectFormBody";
import ProjectFormToggle from "./ProjectFormToggle/ProjectFormToggle";

export default function ProjectFormComponent() {
  return (
    <Stack spacing={2}>
      <ProjectFormHeading />
      <ProjectFormToggle />
      <ProjectFormBody />
    </Stack>
  );
}
