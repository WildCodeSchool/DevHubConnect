import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import ProjectListingCard from "./ProjectListingCard/ProjectListingCard";
import ProjectListingHeader from "./ProjectListingHeader/ProjectListingHeader";
import ProjectListingFilters from "./ProjectListingFilters/ProjectListingFilters";

function ProjectListingContainer() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        justifyContent="flex-start"
        alignItems="center"
      >
        <ProjectListingHeader />
      </Stack>

      <Paper>
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          spacing={{ xs: 1, sm: 1, md: 2 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <ProjectListingFilters />
        </Stack>
      </Paper>
      <Stack
        direction={{ xs: "column", sm: "column", md: "column" }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <ProjectListingCard />
        <ProjectListingCard />
        <ProjectListingCard />
      </Stack>
    </>
  );
}
export default ProjectListingContainer;
