import * as React from "react";
import Stack from "@mui/material/Stack";
import ProjectListingCard from "./ProjectListingCard/ProjectListingCard";
import ProjectListingHeader from "./ProjectListingHeader/ProjectListingHeader";

function ProjectListingContainer() {
  return (
    <Stack spacing={2}>
      <ProjectListingHeader />
      <ProjectListingCard />
      <ProjectListingCard />
      <ProjectListingCard />
    </Stack>
  );
}
export default ProjectListingContainer;
