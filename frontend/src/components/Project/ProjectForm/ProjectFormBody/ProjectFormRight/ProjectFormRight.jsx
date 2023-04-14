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
  formSkills,
  setFormSkills,
  handleSubmitSave,
  erreurForm,
  setErreurForm,
}) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <FormRegion
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        erreurForm={erreurForm}
        setErreurForm={setErreurForm}
      />
      <FormDownloads />
      <FormDates
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        erreurForm={erreurForm}
        setErreurForm={setErreurForm}
      />
      <FormSkills
        formSkills={formSkills}
        setFormSkills={setFormSkills}
        erreurForm={erreurForm}
        setErreurForm={setErreurForm}
      />
      <FormSave
        handleSubmitSave={handleSubmitSave}
        erreurForm={erreurForm}
        setErreurForm={setErreurForm}
      />
    </Stack>
  );
}
ProjectFormRight.propTypes = {
  startDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  setStartDate: PropTypes.func,
  endDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  setEndDate: PropTypes.func,
  selectedRegion: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setSelectedRegion: PropTypes.func,
  formSkills: PropTypes.arrayOf(PropTypes.number),
  setFormSkills: PropTypes.func,
  handleSubmitSave: PropTypes.func,
  erreurForm: PropTypes.arrayOf(PropTypes.string),
  setErreurForm: PropTypes.arrayOf(PropTypes.string),
};

ProjectFormRight.defaultProps = {
  startDate: "",
  setStartDate: "",
  endDate: "",
  setEndDate: "",
  selectedRegion: "",
  setSelectedRegion: "",
  formSkills: {},
  setFormSkills: "",
  handleSubmitSave: "",
  erreurForm: {},
  setErreurForm: {},
};
export default ProjectFormRight;
