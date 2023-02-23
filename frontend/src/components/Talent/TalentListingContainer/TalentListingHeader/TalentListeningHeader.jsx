import React from "react";
import Typography from "@mui/material/Typography";

function TalentListeningHeader() {
  return (
    <box>
      {/* Voir pour le style sx */}
      <Typography gutterBottom variant="h2" component="div">
        TALENT SCHOLARSHIP
      </Typography>
      <Typography variant="h3" color="text.secondary">
        Easily and quickly find your future collaborators according to the
        skills sought, in your region or elsewhere...
      </Typography>
    </box>
  );
}

export default TalentListeningHeader;
