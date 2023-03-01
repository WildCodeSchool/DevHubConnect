import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import TalentCardName from "../Talent/TalentListingContainer/TalentCardGallery/TalentCard/TalentCardName/TalentCardName";
// import TalentCardDescription from "@components/Talent/TalentListingContainer/TalentCardGallery/TalentCard/TalentCardDescription/TalentCardDescription";

function TalentSingleCard() {
  return (
    <Paper elevation={3} p={2}>
      <Card sx={{ maxWidth: 345 }}>
        <Stack />
      </Card>
    </Paper>
  );
}

export default TalentSingleCard;
