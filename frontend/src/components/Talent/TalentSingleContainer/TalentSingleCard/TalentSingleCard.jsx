import * as React from "react";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import TalentAvatar from "../../TalentListingContainer/TalentCardGallery/TalentCard/TalentAvatar/TalentAvatar";
import TalentJobFirstname from "./TalentSingleCardContent/TalentJobFirstname/TalentJobFirstname";
import TalentMail from "./TalentSingleCardContent/TalentMail/TalentMail";
import TalentCardDescription from "../../TalentListingContainer/TalentCardGallery/TalentCard/TalentCardDescription/TalentCardDescription";

function TalentSingleCard() {
  return (
    <Paper elevation={3} p={2}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        display="flex"
        justifyContent="space-between"
      >
        <TalentAvatar />
        <TalentJobFirstname />
        <TalentMail />
      </Stack>

      <Stack>
        <TalentCardDescription />
      </Stack>
    </Paper>
  );
}

export default TalentSingleCard;
