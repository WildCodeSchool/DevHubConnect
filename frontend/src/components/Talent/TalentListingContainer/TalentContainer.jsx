import React, { useState } from "react";
import TalentCardGallery from "./TalentCardGallery/TalentCardGallery";
import TalentListingFilter from "./TalentListingFilter/TalentListingFilter";
import TalentListeningHeader from "./TalentListingHeader/TalentListeningHeader";
// import PropTypes from "prop-types";

function TalentContainer() {
  const [currentSelectedJobs, setSelectedJobs] = useState([]);
  const [currentSelectedRegions, setSelectedRegions] = useState([]);
  const [selectedSkillIds, setSelectedSkillIds] = useState([]);
  console.info(selectedSkillIds, "camembert");
  return (
    <div>
      <TalentListeningHeader />
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
    </div>
  );
}

export default TalentContainer;
