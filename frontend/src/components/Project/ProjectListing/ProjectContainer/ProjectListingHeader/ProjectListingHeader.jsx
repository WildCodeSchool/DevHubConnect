import * as React from "react";
import { Paper, Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

function ProjectListingHeader() {
  return (
    <Paper elevation={8} sx={{ mb: 2 }}>
      <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
        <Stack spacing={2} sx={{ mb: 2 }}>
          <Typography variant="h1">Projets</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Découvrez des projets passionnants et innovants qui témoignent de
            créativité et d'expertise dans divers domaines !"
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}
export default ProjectListingHeader;
