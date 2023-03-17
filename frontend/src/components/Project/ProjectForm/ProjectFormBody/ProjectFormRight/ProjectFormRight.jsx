import React from "react";
import Stack from "@mui/material/Stack";
import FormRegion from "./FormRegion/FormRegion";
import FormDownloads from "./FormDownloads/FormDownloads";
import FormDates from "./FormDates/FormDates";

function ProjectFormRight() {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <FormRegion />
      <FormDownloads />
      <FormDates />
    </Stack>
  );
}

export default ProjectFormRight;
