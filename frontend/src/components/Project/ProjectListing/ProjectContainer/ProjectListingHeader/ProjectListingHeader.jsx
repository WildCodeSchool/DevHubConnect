import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function ProjectListingHeader() {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={{ sm: 1, md: 2 }}
      justifyContent="flex-start"
      alignItems="center"
      p={2}
    >
      <Typography gutterBottom variant="h1" component="div">
        Project
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Stack>
  );
}
export default ProjectListingHeader;
