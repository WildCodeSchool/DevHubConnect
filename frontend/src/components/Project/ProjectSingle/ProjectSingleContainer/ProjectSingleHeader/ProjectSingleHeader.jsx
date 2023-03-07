import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import ProjectSingleButtonPostuler from "./ProjectSingleButtonPostuler/ProjectSingleButtonPostuler";

function ProjectSingleHeader({ projectName }) {
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
          {projectName}
        </Typography>
        <Typography variant="body1">
          Nous invitons tous les talents intéressés à postuler pour nos projets
          et à contribuer à leur réussite.
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
ProjectSingleHeader.propTypes = {
  projectName: PropTypes.string,
};

ProjectSingleHeader.defaultProps = {
  projectName: "",
};
export default ProjectSingleHeader;
