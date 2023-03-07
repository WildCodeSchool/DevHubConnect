import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import SelectDatesProject from "./SelectDatesProject/SelectDatesProject";
import SelectRegionsProject from "./SelectRegionsProject/SelectRegionsProject";
import SelectSkillsProject from "./SelectSkillsProject/SelectSkillsProject";

function ProjectListingFilters() {
  return (
    <Paper elevation={3} p={2}>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        justifyContent="flex-start"
        alignItems="center"
      >
        <SelectDatesProject />
        <SelectRegionsProject />
        <SelectSkillsProject />
      </Stack>
    </Paper>
  );
}

export default ProjectListingFilters;
