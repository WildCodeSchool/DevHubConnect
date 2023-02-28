import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

function ProjectListingHeader() {
  return (
    <Paper
      elevation={3}
      sx={{
        flexGrow: 1,
        borderRadius: 2,
      }}
    >
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ sm: 1, md: 2 }}
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Typography gutterBottom variant="h1" component="div">
          Project
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>
    </Paper>
  );
}
export default ProjectListingHeader;
