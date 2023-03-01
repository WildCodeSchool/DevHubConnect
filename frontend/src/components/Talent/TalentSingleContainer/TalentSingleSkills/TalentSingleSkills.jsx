import * as React from "react";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function TalentSingleSkills() {
  return (
    <Paper elevation={3} p={2}>
      <Stack sx={{ backgroundColor: "#e0f2f1" }}>
        <Typography
          component="h4"
          variant="h3"
          sx={{ p: 1, textAlign: "center" }}
        >
          COMPETENCES
        </Typography>
        <Stack
          // direction="row"
          // justifyContent="center" // {{ xs: "center", sm: "center", md: "space-around" }}
          // alignItems="center"
          // spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
          p={2}
        >
          <Chip label="JavaScript" size="Medium" />
          <Chip label="CSS" size="Medium" />
          <Chip label="React.js" size="small" />
          <Chip label="Angular" size="small" />
          <Chip label="SEO" size="small" />
        </Stack>
      </Stack>
    </Paper>
  );
}

export default TalentSingleSkills;
