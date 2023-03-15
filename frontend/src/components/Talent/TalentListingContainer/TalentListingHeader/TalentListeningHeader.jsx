import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function TalentListeningHeader() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Bourse aux talents</Typography>

      <Typography variant="subtitle1" gutterBottom>
        Trouvez facilement et rapidement vos futurs collaborateurs en fonction
        des compétences recherchées, dans votre région ou ailleurs...
      </Typography>
    </Stack>
  );
}

export default TalentListeningHeader;
