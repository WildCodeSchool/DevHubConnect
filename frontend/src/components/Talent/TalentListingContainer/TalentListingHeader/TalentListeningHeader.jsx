import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function TalentListeningHeader() {
  return (
    <Box>
      <Typography variant="h1">Bourse aux talents</Typography>

      <Typography variant="subtitle1" gutterBottom>
        Easily and quickly find your future collaborators according to the
        skills sought, in your region or elsewhere ...
      </Typography>
    </Box>
  );
}

export default TalentListeningHeader;
