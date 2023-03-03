import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import ProjectSingleButtonPostuler from "./ProjectSingleButtonPostuler/ProjectSingleButtonPostuler";

function ProjectSingleHeader() {
  return (
    <Paper
      elevation={3}
      sx={{
        flexGrow: 1,
        borderRadius: 2,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "column", md: "column" }}
        spacing={{ sm: 1, md: 2 }}
        justifyContent="flex-start"
        alignItems="flex-start"
        p={2}
      >
        <Typography gutterBottom variant="h1" component="div">
          Project
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ sm: 1, md: 2 }}
        justifyContent="flex-end"
        alignItems="center"
        p={2}
      >
        <ProjectSingleButtonPostuler />
      </Stack>
    </Paper>
  );
}
export default ProjectSingleHeader;
