import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
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
    <Accordion id="notselected">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography variant="subtitle2">Projets non retenus</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid
          container
          direction="row"
          justifyContent="center"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          width={1000}
          flexWrap="wrap"
        >
          {projects.map((project) => (
            <UserProjectCard
              key={project.id}
              projectName={project.project_name}
              projectDescription={project.project_description}
              sx={{ marginLeft: "20px" }}
            />
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default UserProjectNotSelected;
