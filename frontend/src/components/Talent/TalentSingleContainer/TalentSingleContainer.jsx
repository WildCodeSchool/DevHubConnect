import React from "react";
// import Stack from "@mui/material/Stack";
import TalentSingleHeader from "./TalentSingleHeader/TalentSingleHeader";
import TalentSingleSkills from "./TalentSingleSkills/TalentSingleSkills";
import TalentAbout from "./TalentAbout/TalentAbout";
import TalentPortofolio from "./TalentPortofolio/TalentPortofolio";

function TalentSingleContainer() {
  return (
    <div>
      <TalentSingleHeader />

      <TalentSingleSkills />

      <TalentAbout />
      <TalentPortofolio />
    </div>
  );
}

export default TalentSingleContainer;
