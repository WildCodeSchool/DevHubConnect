import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Box } from "@mui/material";
import axios from "axios";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

function UserProjectNotSelected() {
  const [projects, setProjects] = useState([]);

  const getNotSelectedProjects = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5007/projects_notselected", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((projectsData) => {
        setProjects(projectsData[0]);
        console.info(projectsData[0]);
      });
  };

  useEffect(() => {
    getNotSelectedProjects();
  }, []);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="accordionTitle">Projets non retenus</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {projects.map((project) => (
              <Grid item xs={12} md={6}>
                <UserProjectCard
                  key={project.id}
                  projectName={project.project_name}
                  projectDescription={project.project_description}
                  sx={{ marginLeft: "20px" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default UserProjectNotSelected;
