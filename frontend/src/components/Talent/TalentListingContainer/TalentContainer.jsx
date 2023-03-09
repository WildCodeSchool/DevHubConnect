import React, { useState } from "react";
import TalentCardGallery from "./TalentCardGallery/TalentCardGallery";
import TalentListingFilter from "./TalentListingFilter/TalentListingFilter";
import TalentListeningHeader from "./TalentListingHeader/TalentListeningHeader";
// import PropTypes from "prop-types";

function TalentContainer() {
  const [currentSelectedJobs, setSelectedJobs] = useState([]);
  const [currentSelectedRegions, setSelectedRegions] = useState([]);

  return (
    <div>
      <TalentListeningHeader />
      <TalentListingFilter
        selectedJobs={currentSelectedJobs}
        setSelectedJobs={setSelectedJobs}
        selectedRegions={currentSelectedRegions}
        setSelectedRegions={setSelectedRegions}
      />
      <TalentCardGallery
        selectedJobs={currentSelectedJobs}
        setSelectedJobs={setSelectedJobs}
        selectedRegions={currentSelectedRegions}
        setSelectedRegions={setSelectedRegions}
      />
    </div>
  );
}

export default TalentContainer;
