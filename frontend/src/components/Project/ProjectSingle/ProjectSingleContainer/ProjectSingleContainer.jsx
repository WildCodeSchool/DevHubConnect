import * as React from "react";
import Stack from "@mui/material/Stack";
import ProjectSingleDescriptionContent from "./ProjectSingleDescription/ProjectSingleDescriptionContent/ProjectSingleDescriptionContent";
import ProjectSingleHeader from "./ProjectSingleHeader/ProjectSingleHeader";

function ProjectSingleContainer() {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "column" }}
      spacing={{ xs: 1, sm: 1, md: 2 }}
      justifyContent="flex-start"
      alignItems="space-between"
    >
      <ProjectSingleHeader />
      <ProjectSingleDescriptionContent />
    </Stack>
  );
}
export default ProjectSingleContainer;
