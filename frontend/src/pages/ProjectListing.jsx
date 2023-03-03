import React from "react";
import Stack from "@mui/material/Stack";
import ProjectListingContainer from "../components/Project/ProjectListing/ProjectContainer/ProjectListingContainer";
import ProjectListingHeader from "../components/Project/ProjectListing/ProjectContainer/ProjectListingHeader/ProjectListingHeader";
import ProjectListingFilters from "../components/Project/ProjectListing/ProjectContainer/ProjectListingFilters/ProjectListingFilters";

function ProjectListing() {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "column" }}
      spacing={{ xs: 1, sm: 1, md: 2 }}
      justifyContent="flex-start"
      alignItems="flex-start"
      p={2}
    >
      <ProjectListingHeader />
      <ProjectListingFilters />
      <ProjectListingContainer />
    </Stack>
  );
}

export default ProjectListing;
