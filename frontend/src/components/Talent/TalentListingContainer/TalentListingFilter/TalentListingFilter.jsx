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
}) {
  return (
    <Box sx={{ mt: 2 }}>
      <Stack
        direction={{
          sm: "column",
          md: "row",
        }}
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "flex-start",
        }}
        spacing={{ xs: 1, sm: 2 }}
        size={{ xs: "100%", sm: "33%", md: "20%" }}
      >
        <TalentSelectRegion
          selectedRegions={currentSelectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
        <TalentSelectJob
          selectedJobs={currentSelectedJobs}
          setSelectedJobs={setSelectedJobs}
        />
        <TalentSelectSkills />
      </Stack>
    </Box>
  );
}

TalentListingFilter.propTypes = {
  currentSelectedJobs: PropTypes.arrayOf(PropTypes.string),
  setSelectedJobs: PropTypes.func,
  currentSelectedRegions: PropTypes.arrayOf(PropTypes.string),
  setSelectedRegions: PropTypes.func,
};

TalentListingFilter.defaultProps = {
  currentSelectedJobs: [],
  setSelectedJobs: () => {},
  currentSelectedRegions: [],
  setSelectedRegions: () => {},
};

export default TalentListingFilter;
