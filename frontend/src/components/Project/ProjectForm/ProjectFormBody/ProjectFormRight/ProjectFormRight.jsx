import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import FormRegion from "./FormRegion/FormRegion";
import FormDownloads from "./FormDownloads/FormDownloads";
import FormDates from "./FormDates/FormDates";
import FormSkills from "./FormSkills/FormSkills";
import FormSave from "./FormSave/FormSave";

function ProjectFormRight({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  selectedRegion,
  setSelectedRegion,
}) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <FormRegion
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <FormDownloads />
      <FormDates
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <FormSkills />
      <FormSave />
    </Stack>
  );
}
ProjectFormRight.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  setEndDate: PropTypes.instanceOf(Date),
  selectedRegion: PropTypes.number,
  setSelectedRegion: PropTypes.number,
};

ProjectFormRight.defaultProps = {
  startDate: "",
  setStartDate: "",
  endDate: "",
  setEndDate: "",
  selectedRegion: "",
  setSelectedRegion: "",
};
export default ProjectFormRight;
