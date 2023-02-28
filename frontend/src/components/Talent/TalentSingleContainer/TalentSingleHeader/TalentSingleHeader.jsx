import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function TalentSingleHeader() {
  return (
    <Box sx={{ backgroundColor: "#cfe8fc" }}>
      <Typography component="h1" variant="h3" sx={{ p: 1 }}>
        Votre talent
      </Typography>
      <Typography component="h2" variant="h5" sx={{ p: 1, color: "grey" }}>
        Je suis votre talent. Pour mieux me connaître prenez le temps de lire ma
        fiche de présentation ...
      </Typography>
    </Box>
  );
}

export default TalentSingleHeader;
