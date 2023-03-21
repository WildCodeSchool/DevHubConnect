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
          />
        </Stack>
      </Box>
    </Stack>
  );
}

ProjectFormBody.propTypes = {
  projectTitle: PropTypes.string,
  setProjectTitle: PropTypes.string,
  aboutProject: PropTypes.string,
  setAboutProject: PropTypes.string,
  projectDescription: PropTypes.string,
  setProjectDescription: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  setEndDate: PropTypes.instanceOf(Date),
  selectedRegion: PropTypes.number,
  setSelectedRegion: PropTypes.number,
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
};
