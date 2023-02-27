import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function TalentCardName() {
  return (
    <Stack direction="column">
      <Typography gutterBottom variant="body1" color="text.secondary">
        Métier (job_id)
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Mark Zuckerberg
      </Typography>
    </Stack>
  );
}

export default TalentCardName;
