import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import ProjectFormHeading from "./ProjectFormHeading/ProjectFormHeading";
import ProjectFormBody from "./ProjectFormBody/ProjectFormBody";
import ProjectFormToggle from "./ProjectFormToggle/ProjectFormToggle";
// import { Info } from "@mui/icons-material";

export default function ProjectFormComponent() {
  const [checked, setChecked] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [aboutProject, setAboutProject] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedRegion, setSelectedRegion] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [formSkills, setFormSkills] = useState([]);
  const userId = localStorage.getItem("userId");
  // const token = localStorage.getItem("token");
  const projectFormData = {
    userId,
    checked,
    projectTitle,
    aboutProject,
    projectDescription,
    selectedRegion,
    startDate,
    endDate,
    formSkills,
  };

  const handleSubmitSave = async (event) => {
    event.preventDefault();
    console.info("Coucou");
  };

  // console.log(checked);
  // console.log(projectTitle);
  // console.log(aboutProject);
  // console.log(projectDescription);
  // console.log(selectedRegion);
  // console.log(startDate);
  // console.log(endDate);
  // console.log(formSkills);
  console.info(projectFormData);

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
        formSkills={formSkills}
        setFormSkills={setFormSkills}
        handleSubmitSave={handleSubmitSave}
      />
    </Stack>
  );
}
