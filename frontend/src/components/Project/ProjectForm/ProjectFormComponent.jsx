import React, { useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
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
  const [formSkills, setFormSkills] = useState([]);
  const [erreur, setErreur] = useState(null);
  const [erreurForm, setErreurForm] = useState([]);
  const [projectImg, setProjectImg] = useState("yourProjectImg.jpg");
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const navigate = useNavigate();
  const projectFormData = {
    project_name: projectTitle,
    project_start_date: startDate,
    project_end_date: endDate,
    project_about: aboutProject,
    project_description: projectDescription,
    project_state: checked,
    project_remote: "0",
    project_image: projectImg,
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
        .then((response) => {
          if (response.request.status === 200) {
            navigate(`/project/${response.data}`); // Redirection vers le projet créé si status 200 creation
          }
        })
        .catch((error) => {
          // Traitement de l'erreur
          setErreur(error.message);
          setErreurForm(error.response.data.validationErrors);
          if (error.response && error.response?.status === 401) {
            navigate("/login"); // Redirection vers le login si status 401 pas d'autorisation
          }
        });
    }
  };
  return (
    <Stack spacing={2}>
      <ProjectFormHeading
        projectTitle={projectTitle}
        aboutProject={aboutProject}
        projectImg={projectImg}
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
        erreur={erreur}
        handleSubmitSave={handleSubmitSave}
        erreurForm={erreurForm}
        setErreurForm={setErreurForm}
        setProjectImg={setProjectImg}
      />
    </Stack>
  );
}
