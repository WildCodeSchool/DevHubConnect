import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "mui-image";
import Neuralink from "../../../../assets/neuralink.jpg";

export default function ProjectFormHeading({ projectTitle, aboutProject }) {
  return (
    <Paper elevation={8} sx={{ mb: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ background: "#FFF", padding: 3 }}>
          <Stack spacing={1}>
            <Typography variant="h1">Création de projet</Typography>
            <Typography variant="h5">{projectTitle}</Typography>
            <Typography variant="subtitle2" gutterBottom>
              {aboutProject}
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ background: "#FFF", padding: 3 }}>
          <Box sx={{ height: 117 }}>
            <Image
              src={Neuralink}
              aspectRatio={16 / 9}
              disableSpinner
              sx={{ float: "right" }}
            />
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
}

ProjectFormHeading.propTypes = {
  projectTitle: PropTypes.string,
  aboutProject: PropTypes.string,
};

ProjectFormHeading.defaultProps = {
  projectTitle: "",
  aboutProject: "",
};