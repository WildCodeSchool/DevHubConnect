import React from "react";
import Typography from "@mui/material/Typography";

function TalentCardDescription(biography) {
  return (
    <Typography
      gutterBottom
      variant="body1"
      color="text.secondary"
      minWidth={300}
    >
      {biography}
    </Typography>
  );
}

export default TalentCardDescription;
