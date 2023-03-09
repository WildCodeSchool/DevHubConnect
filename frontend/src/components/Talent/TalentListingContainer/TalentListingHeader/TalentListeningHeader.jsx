import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function TalentListeningHeader() {
  return (
    <Box>
      <Typography variant="h1">Bourse aux talents</Typography>

      <Typography variant="subtitle1" gutterBottom>
        Trouvez facilement et rapidement vos futurs collaborateurs en fonction
        des compétences recherchées, dans votre région ou ailleurs...
      </Typography>
    </Box>
  );
}

export default TalentListeningHeader;
