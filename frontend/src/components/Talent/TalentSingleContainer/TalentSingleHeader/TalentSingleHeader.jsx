import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function TalentSingleHeader() {
  return (
    <Stack spacing={2} sx={{ backgroundColor: "#cfe8fc" }}>
      <Typography variant="h1">Votre talent</Typography>

      <Typography variant="subtitle1" gutterBottom>
        Je suis votre talent. Pour mieux me connaître prenez le temps de lire ma
        fiche de présentation ...
      </Typography>
    </Stack>
  );
}

export default TalentSingleHeader;
