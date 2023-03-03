import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function TalentJobFirstname() {
  return (
    <Box direction="column" textAlign={{ xs: "center", sm: "left" }} py={2}>
      <Typography gutterBottom variant="body1" color="text.secondary">
        Métier (job_id)
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Mark Zuckerberg
      </Typography>
    </Box>
  );
}

export default TalentJobFirstname;
