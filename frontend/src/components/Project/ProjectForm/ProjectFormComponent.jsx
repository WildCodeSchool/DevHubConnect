import React, { useState } from "react";
import axios from "axios";
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
  const userId = parseInt(localStorage.getItem("userId"), 10);

  const projectFormData = {
    project_name: projectTitle,
    project_start_date: startDate,
    project_end_date: endDate,
    project_about: aboutProject,
    project_description: projectDescription,
    project_state: checked,
    project_remote: "0",
    project_image: "",
    region_id: selectedRegion,
    creator_id: userId,
    skillIds: formSkills,
  };

  const handleSubmitSave = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .post("http://localhost:5007/projects/", projectFormData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .catch((error) => {
          // Traitement de l'erreur
          console.info(error);
        });
    }
  };

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
