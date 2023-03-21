import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import ProjectFormHeading from "./ProjectFormHeading/ProjectFormHeading";
import ProjectFormBody from "./ProjectFormBody/ProjectFormBody";
import ProjectFormToggle from "./ProjectFormToggle/ProjectFormToggle";

export default function ProjectFormComponent() {
  const [checked, setChecked] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [aboutProject, setAboutProject] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedRegion, setSelectedRegion] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <Stack spacing={2}>
      <ProjectFormHeading
        projectTitle={projectTitle}
        aboutProject={aboutProject}
      />
      <ProjectFormToggle checked={checked} setChecked={setChecked} />
      <ProjectFormBody
        projectTitle={projectTitle}
        setProjectTitle={setProjectTitle}
        aboutProject={aboutProject}
        setAboutProject={setAboutProject}
        projectDescription={projectDescription}
        setProjectDescription={setProjectDescription}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </Stack>
  );
}
