import React from "react";
import PropTypes from "prop-types";
import { Paper, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function ProjectFormTexts({
  projectTitle,
  setProjectTitle,
  aboutProject,
  setAboutProject,
  projectDescription,
  setProjectDescription,
  erreurForm,
  setErreurForm,
}) {
  const handleProjectTitleChange = (event) => {
    event.preventDefault();
    if (event.target.value.length <= 60) {
      setErreurForm([]);
      setProjectTitle(event.target.value);
    }
  };
  const handleAboutProjectChange = (event) => {
    event.preventDefault();
    if (event.target.value.length <= 150) {
      setErreurForm([]);
      setAboutProject(event.target.value);
    }
  };

  const handleDescriptionProjecteChange = (event) => {
    event.preventDefault();
    if (event.target.value.length <= 2000) {
      setErreurForm([]);
      setProjectDescription(event.target.value);
    }
  };

  const erreurTitle = erreurForm.filter((obj) => obj.field === "project_name");
  const erreurAbout = erreurForm.filter((obj) => obj.field === "project_about");
  const erreurDescription = erreurForm.filter(
    (obj) => obj.field === "project_description"
  );

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
          error={Boolean(erreurTitle[0]?.message)}
          helperText={erreurTitle[0]?.message ? erreurTitle[0]?.message : ""}
          style={{ color: erreurTitle[0]?.message ? "red" : "" }}
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
          error={Boolean(erreurAbout[0]?.message)}
          helperText={erreurAbout[0]?.message ? erreurAbout[0]?.message : ""}
          style={{ color: erreurAbout[0]?.message ? "red" : "" }}
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
          error={Boolean(erreurDescription[0]?.message)}
          helperText={
            erreurDescription[0]?.message ? erreurDescription[0]?.message : ""
          }
          style={{ color: erreurDescription[0]?.message ? "red" : "" }}
        />
      </Paper>
    </FormControl>
  );
}

ProjectFormTexts.propTypes = {
  projectTitle: PropTypes.string,
  setProjectTitle: PropTypes.func,
  aboutProject: PropTypes.string,
  setAboutProject: PropTypes.func,
  projectDescription: PropTypes.string,
  setProjectDescription: PropTypes.func,
  erreurForm: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  setErreurForm: PropTypes.func,
};

ProjectFormTexts.defaultProps = {
  projectTitle: "",
  setProjectTitle: "",
  aboutProject: "",
  setAboutProject: "",
  projectDescription: "",
  setProjectDescription: "",
  erreurForm: [],
  setErreurForm: "",
};
