import * as React from "react";
import { Stack, Box, Paper, Typography, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { format } from "date-fns";
import ProjectSingleButtonPostuler from "./ProjectSingleButtonPostuler/ProjectSingleButtonPostuler";

function ProjectSingleHeader({
  projectName,
  projectStartDate,
  projectEndDate,
  regionName,
  projectAbout,
}) {
  return (
    <Paper elevation={8} sx={{ mb: 2 }}>
      <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={10}>
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              justifyContent="space-between"
            >
              <Typography variant="h1">{projectName}</Typography>
              <Typography variant="h4" gutterBottom>
                Du{" "}
                {projectStartDate?.length > 0
                  ? format(new Date(projectStartDate), "dd/MM/yyyy")
                  : ""}{" "}
                au{" "}
                {projectEndDate?.length > 0
                  ? format(new Date(projectEndDate), "dd/MM/yyyy")
                  : ""}
                , secteur {regionName}
              </Typography>

              <Typography variant="subtitle3" gutterBottom>
                {projectAbout}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={6}
            md={2}
            container
            direction="column"
            alignItems="flex-end"
            justify="flex-end"
          >
            <ProjectSingleButtonPostuler />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
ProjectSingleHeader.propTypes = {
  projectName: PropTypes.string,
  projectStartDate: PropTypes.string,
  projectEndDate: PropTypes.string,
  regionName: PropTypes.string,
  projectAbout: PropTypes.string,
};

ProjectSingleHeader.defaultProps = {
  projectName: "",
  projectStartDate: "",
  projectEndDate: "",
  regionName: "",
  projectAbout: "",
};

export default ProjectSingleHeader;
