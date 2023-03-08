import * as React from "react";

import Stack from "@mui/material/Stack";

import SelectDatesProject from "./SelectDatesProject/SelectDatesProject";
import SelectRegionsProject from "./SelectRegionsProject/SelectRegionsProject";
import SelectSkillsProject from "./SelectSkillsProject/SelectSkillsProject";

function ProjectListingFilters() {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={{ xs: 1, sm: 1, md: 2 }}
      justifyContent="space-between"
      alignItems="center"
      sx={{ mt: 2, mb: 2 }}
    >
      <SelectDatesProject />
      <SelectRegionsProject />
      <SelectSkillsProject />
    </Stack>
  );
}

export default ProjectListingFilters;
