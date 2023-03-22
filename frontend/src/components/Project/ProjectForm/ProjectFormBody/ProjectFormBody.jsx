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
}) {
  return (
    <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={2}>
      <Box sx={{ width: "100%" }}>
        <Stack alignItems="center">
          <ProjectFormLeft
            projectTitle={projectTitle}
            setProjectTitle={setProjectTitle}
            aboutProject={aboutProject}
            setAboutProject={setAboutProject}
            projectDescription={projectDescription}
            setProjectDescription={setProjectDescription}
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
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func,
  endDate: PropTypes.instanceOf(Date),
  setEndDate: PropTypes.func,
  selectedRegion: PropTypes.number,
  setSelectedRegion: PropTypes.func,
  formSkills: PropTypes.objectOf(PropTypes.number),
  setFormSkills: PropTypes.func,
  handleSubmitSave: PropTypes.func,
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
};
