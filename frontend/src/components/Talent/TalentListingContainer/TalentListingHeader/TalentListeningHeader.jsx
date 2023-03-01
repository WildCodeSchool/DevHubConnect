import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function TalentListeningHeader() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Bourse aux talents</Typography>

      <Typography variant="subtitle1" gutterBottom>
        Easily and quickly find your future collaborators according to the
        skills sought, in your region or elsewhere ...
      </Typography>
    </Stack>
  );
}

export default TalentListeningHeader;
