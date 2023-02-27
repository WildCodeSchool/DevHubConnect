import * as React from "react";
import Stack from "@mui/material/Stack";
import ProjectSingleDescriptionContent from "./ProjectSingleDescription/ProjectSingleDescriptionContent/ProjectSingleDescriptionContent";
import ProjectSingleHeader from "./ProjectSingleHeader/ProjectSingleHeader";

function ProjectSingleContainer() {
  return (
    <Stack spacing={2}>
      <ProjectSingleHeader />
      <ProjectSingleDescriptionContent />
    </Stack>
  );
}
export default ProjectSingleContainer;
