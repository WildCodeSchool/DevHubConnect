import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import TalentSelectRegion from "./TalentSelectRegion/TalentSelectRegion";
import TalentSelectSkills from "./TalentSelectSkills/TalentSelectSkills";
import TalentSelectJob from "./TalentSelectJob/TalentSelectJob";

function TalentListingFilter({
  currentSelectedJobs,
  setSelectedJobs,
  currentSelectedRegions,
  setSelectedRegions,
  selectedSkillIds,
  setSelectedSkillIds,
}) {
  console.info(currentSelectedJobs, "japanJOB");
  console.info(selectedSkillIds, "japan");
  return (
    <Box sx={{ mt: 2 }}>
      <Stack
        direction={{
          sm: "column",
          md: "row",
        }}
        spacing={2}
        justifyContent="space-between"
      >
        <TalentSelectRegion
          selectedRegions={currentSelectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
        <TalentSelectJob
          selectedJobs={currentSelectedJobs}
          setSelectedJobs={setSelectedJobs}
        />
        <TalentSelectSkills
          selectedSkillIds={selectedSkillIds}
          setSelectedSkillIds={setSelectedSkillIds}
        />
      </Stack>
    </Box>
  );
}

TalentListingFilter.propTypes = {
  currentSelectedJobs: PropTypes.arrayOf(PropTypes.string),
  setSelectedJobs: PropTypes.func,
  currentSelectedRegions: PropTypes.arrayOf(PropTypes.string),
  setSelectedRegions: PropTypes.func,
  selectedSkillIds: PropTypes.arrayOf(PropTypes.string),
  setSelectedSkillIds: PropTypes.func,
};

TalentListingFilter.defaultProps = {
  currentSelectedJobs: [],
  setSelectedJobs: () => {},
  currentSelectedRegions: [],
  setSelectedRegions: () => {},
  selectedSkillIds: [],
  setSelectedSkillIds: () => {},
};

export default TalentListingFilter;
