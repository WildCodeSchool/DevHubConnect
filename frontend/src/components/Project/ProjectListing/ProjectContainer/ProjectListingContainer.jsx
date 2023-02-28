import * as React from "react";
import Stack from "@mui/material/Stack";
import ProjectListingCard from "./ProjectListingCard/ProjectListingCard";
import ProjectListingHeader from "./ProjectListingHeader/ProjectListingHeader";
import SelectDatesProject from "./ProjectListingFilters/SelectDatesProject/SelectDatesProject";
import SelectRegionsProject from "./ProjectListingFilters/SelectRegionsProject/SelectRegionsProject";
import SelectSkillsProject from "./ProjectListingFilters/SelectSkillsProject/SelectSkillsProject";

function ProjectListingContainer() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <ProjectListingHeader />
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <SelectDatesProject />
        <SelectRegionsProject />
        <SelectSkillsProject />
      </Stack>
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
