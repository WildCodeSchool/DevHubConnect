import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function TalentListeningHeader() {
  return (
    <Box sx={{ backgroundColor: "#cfe8fc" }}>
      <Typography variant="h1">Bourse aux talents</Typography>

      <Typography component="h2">
        Easily and quickly find your future collaborators according to the
        skills sought, in your region or elsewhere ...
      </Typography>
    </Box>
  );
}

export default TalentListeningHeader;
