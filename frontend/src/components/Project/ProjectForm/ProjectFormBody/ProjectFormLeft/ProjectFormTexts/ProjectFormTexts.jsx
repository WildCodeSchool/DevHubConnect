import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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
    <Box sx={{ width: "100%" }}>
      <FormControl sx={{ p: 3 }}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <TextField
            fullWidth
            id="ProjectTitle"
            label={`Project title in 60 characters (${projectTitle.length}/60)`}
            multiline
            rows={1}
            variant="outlined"
            value={projectTitle}
            onChange={handleProjectTitleChange}
            sx={{ mt: 2 }}
          />
        </Paper>

        <Paper elevation={2} sx={{ mt: 2, p: 3 }}>
          <TextField
            fullWidth
            id="aboutProject"
            label={`About your project in 150 characters (${aboutProject.length}/150)`}
            multiline
            rows={2}
            variant="outlined"
            value={aboutProject}
            onChange={handleAboutProjectChange}
            sx={{ mt: 2 }}
          />
        </Paper>
        <Paper elevation={2} sx={{ mt: 2, p: 3 }}>
          <Typography variant="fieldBoxTitle" gutterBottom>
            --------------------------------------------------------------------------
          </Typography>
          <TextField
            fullWidth
            id="projectDescription"
            label={`Your description project in 2000 characters (${projectDescription.length}/2000)`}
            multiline
            rows={15}
            variant="outlined"
            value={projectDescription}
            onChange={handleDescriptionProjecteChange}
            sx={{ mt: 2 }}
          />
        </Paper>
      </FormControl>
    </Box>
  );
}
