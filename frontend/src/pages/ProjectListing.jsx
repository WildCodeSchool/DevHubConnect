import React from "react";
import { Stack, Box } from "@mui/material";
import ProjectListingContainer from "../components/Project/ProjectListing/ProjectContainer/ProjectListingContainer";
import ProjectListingHeader from "../components/Project/ProjectListing/ProjectContainer/ProjectListingHeader/ProjectListingHeader";
//  import ProjectListingFilters from "../components/Project/ProjectListing/ProjectContainer/ProjectListingFilters/ProjectListingFilters";

function ProjectListing() {
  return (
    <Stack spacing={2}>
      <ProjectListingHeader />
      {/* <ProjectListingFilters />  */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <ProjectListingContainer />
      </Box>
    </Stack>
  );
}

export default ProjectListing;
