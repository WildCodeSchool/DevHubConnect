import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography, Box, Paper } from "@mui/material";

function TalentListeningHeader() {
  return (
    <Paper elevation={8} sx={{ mb: 2 }}>
      <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
        <Stack spacing={2}>
          <Typography variant="h1">Bourse aux talents</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Trouvez facilement et rapidement vos futurs collaborateurs en
            fonction des compétences recherchées, dans votre région ou
            ailleurs...
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}

export default TalentListeningHeader;
