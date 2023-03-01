import React from "react";
import TalentCardGallery from "./TalentCardGallery/TalentCardGallery";
import TalentListingFilter from "./TalentListingFilter/TalentListingFilter";
import TalentListeningHeader from "./TalentListingHeader/TalentListeningHeader";

function TalentContainer() {
  return (
    <div>
      <TalentListeningHeader />
      <TalentListingFilter />
      <TalentCardGallery />
    </div>
  );
}

export default TalentContainer;
