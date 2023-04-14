import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ProjectFormLeft from "./ProjectFormLeft/ProjectFormLeft";
import ProjectFormRight from "./ProjectFormRight/ProjectFormRight";

export default function ProjectFormBody({
  projectTitle,
  setProjectTitle,
  aboutProject,
  setAboutProject,
  projectDescription,
  setProjectDescription,
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
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={2}
      sx={{ flexGrow: 1, px: 3, pb: 3 }}
    >
      <Box sx={{ width: "100%" }}>
        <Stack alignItems="center">
          <ProjectFormLeft
            projectTitle={projectTitle}
            setProjectTitle={setProjectTitle}
            aboutProject={aboutProject}
            setAboutProject={setAboutProject}
            projectDescription={projectDescription}
            setProjectDescription={setProjectDescription}
            erreurForm={erreurForm}
            setErreurForm={setErreurForm}
          />
        </Stack>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Stack alignItems="center">
          <ProjectFormRight
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            formSkills={formSkills}
            setFormSkills={setFormSkills}
            handleSubmitSave={handleSubmitSave}
            erreurForm={erreurForm}
            setErreurForm={setErreurForm}
          />
        </Stack>
      </Box>
    </Stack>
  );
}

ProjectFormBody.propTypes = {
  projectTitle: PropTypes.string,
  setProjectTitle: PropTypes.func,
  aboutProject: PropTypes.string,
  setAboutProject: PropTypes.func,
  projectDescription: PropTypes.string,
  setProjectDescription: PropTypes.func,
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
  setErreurForm: PropTypes.func,
};

ProjectFormBody.defaultProps = {
  projectTitle: "",
  setProjectTitle: "",
  aboutProject: "",
  setAboutProject: "",
  projectDescription: "",
  setProjectDescription: "",
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
