import React, { useState } from "react";
import { Box } from "@mui/material";
import TalentCardGallery from "./TalentCardGallery/TalentCardGallery";
import TalentListingFilter from "./TalentListingFilter/TalentListingFilter";
import TalentListeningHeader from "./TalentListingHeader/TalentListeningHeader";

function TalentContainer() {
  const [currentSelectedJobs, setSelectedJobs] = useState([]);
  const [currentSelectedRegions, setSelectedRegions] = useState([]);
  const [selectedSkillIds, setSelectedSkillIds] = useState([]);
  console.info(selectedSkillIds, "camembert");
  return (
    <div>
      <TalentListeningHeader />
      <Box sx={{ padding: 3 }}>
        <TalentListingFilter
          selectedJobs={currentSelectedJobs}
          setSelectedJobs={setSelectedJobs}
          selectedRegions={currentSelectedRegions}
          setSelectedRegions={setSelectedRegions}
          selectedSkillIds={selectedSkillIds}
          setSelectedSkillIds={setSelectedSkillIds}
        />
        <TalentCardGallery
          selectedJobs={currentSelectedJobs}
          setSelectedJobs={setSelectedJobs}
          selectedRegions={currentSelectedRegions}
          setSelectedRegions={setSelectedRegions}
          selectedSkillIds={selectedSkillIds}
          setSelectedSkillIds={setSelectedSkillIds}
        />
      </Box>
    </div>
  );
}

export default TalentContainer;
