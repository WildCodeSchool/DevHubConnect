import React from "react";
import Stack from "@mui/material/Stack";

import TalentSingleHeader from "./TalentSingleHeader/TalentSingleHeader";
import TalentSingleSkills from "./TalentSingleSkills/TalentSingleSkills";
import TalentAbout from "./TalentAbout/TalentAbout";
import TalentPortofolio from "./TalentPortofolio/TalentPortofolio";
import TalentSingleCard from "./TalentSingleCard/TalentSingleCard";
// import TalentCard from "../TalentListingContainer/TalentCardGallery/TalentCard/TalentCard";

function TalentSingleContainer() {
  return (
    <div>
      <TalentSingleHeader />
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent="space-between"
        // alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
        spacing={3}
      >
        <TalentSingleCard />
        <TalentSingleSkills />
      </Stack>
      <TalentAbout />
      <TalentPortofolio />
    </div>
  );
}

export default TalentSingleContainer;
