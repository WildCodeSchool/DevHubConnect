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
          // justifyContent="center" // {{ xs: "center", sm: "center", md: "space-around" }}
          // alignItems="center"
          // spacing={3}
          direction="row"
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          sx={{
            p: 2,
          }}
          flexWrap="wrap"
        >
          <Chip label="JavaScript" size="Medium" />
          <Chip label="CSS" size="Medium" />
          <Chip label="React.js" size="Medium" />
          <Chip label="AngularJS" size="Medium" />
          <Chip label="PHP" size="Medium" />
          <Chip label="Python" size="Medium" />
          <Chip label="C#" size="Medium" />
          <Chip label="Node.js" size="Medium" />
          <Chip label="SQL" size="Medium" />
        </Stack>
      </Stack>
    </Paper>
  );
}

export default TalentSingleSkills;
