import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function TalentSingleSkills() {
  return (
    <Box sx={{ backgroundColor: "#cfe8fc" }}>
      <Typography component="h4" variant="h3" sx={{ p: 1 }}>
        COMPETENCES
      </Typography>
      <Grid>
        <Typography component="h1" variant="body1" sx={{ p: 1, color: "grey" }}>
          bouton 1 et les autres
        </Typography>
      </Grid>
    </Box>
  );
}

export default TalentSingleSkills;
