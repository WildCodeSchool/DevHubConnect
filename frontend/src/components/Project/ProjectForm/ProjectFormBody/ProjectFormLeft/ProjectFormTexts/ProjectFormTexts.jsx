import React, { useState } from "react";
import { Paper, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function ProjectFormTexts() {
  const [projectTitle, setProjectTitle] = useState("");
  const [aboutProject, setAboutProject] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleProjectTitleChange = (event) => {
    event.preventDefault();
    if (event.target.value.length <= 60) {
      setProjectTitle(event.target.value);
    }
  };
  const handleAboutProjectChange = (event) => {
    event.preventDefault();
    if (event.target.value.length <= 150) {
      setAboutProject(event.target.value);
    }
  };

  const handleDescriptionProjecteChange = (event) => {
    event.preventDefault();
    if (event.target.value.length <= 2000) {
      setProjectDescription(event.target.value);
    }
  };
  return (
    <FormControl sx={{ m: 0, width: "100%" }}>
      <Paper elevation={2} sx={{ p: 2, width: "100%" }}>
        <TextField
          fullWidth
          id="ProjectTitle"
          label={`Titre du projet en 60 caractères (${projectTitle.length}/60)`}
          variant="outlined"
          value={projectTitle}
          onChange={handleProjectTitleChange}
          sx={{ mt: 2 }}
        />
      </Paper>
      <Paper elevation={2} sx={{ mt: 2, p: 2 }}>
        <TextField
          fullWidth
          id="aboutProject"
          label={`Le projet en quelques mots (${aboutProject.length}/150 caractères)`}
          multiline
          rows={2}
          variant="outlined"
          value={aboutProject}
          onChange={handleAboutProjectChange}
          sx={{ mt: 2 }}
        />
      </Paper>
      <Paper elevation={2} sx={{ mt: 2, p: 2 }}>
        <TextField
          fullWidth
          id="projectDescription"
          label={`La description de projet (${projectDescription.length}/2000 caractères)`}
          multiline
          rows={15}
          variant="outlined"
          value={projectDescription}
          onChange={handleDescriptionProjecteChange}
          sx={{ mt: 2 }}
        />
      </Paper>
    </FormControl>
  );
}
