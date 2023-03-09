import React, { useState } from "react";
import TalentCardGallery from "./TalentCardGallery/TalentCardGallery";
import TalentListingFilter from "./TalentListingFilter/TalentListingFilter";
import TalentListeningHeader from "./TalentListingHeader/TalentListeningHeader";
// import PropTypes from "prop-types";

function TalentContainer() {
  const [currentSelectedJobs, setSelectedJobs] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  return (
    <div>
      <TalentListeningHeader />
      <TalentListingFilter
        selectedJobs={currentSelectedJobs}
        setSelectedJobs={setSelectedJobs}
        selectedRegions={selectedRegions}
        setSelectedRegions={setSelectedRegions}
      />
      <TalentCardGallery
        selectedJobs={currentSelectedJobs}
        setSelectedJobs={setSelectedJobs}
        selectedRegions={selectedRegions}
        setSelectedRegions={setSelectedRegions}
      />
    </div>
  );
}

export default TalentContainer;
