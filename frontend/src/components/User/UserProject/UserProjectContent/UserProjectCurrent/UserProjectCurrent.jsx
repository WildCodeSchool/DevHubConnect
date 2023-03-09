import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import axios from "axios";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

function UserProjectCurrent() {
  const [projects, setProjects] = useState([]);

  const getCurrentProjects = () => {
    axios
      .get("http://localhost:5007/projects_current")
      .then((response) => response.data)
      .then((projectsData) => {
        setProjects(projectsData[0]);
        console.info(projectsData[0]);
      });
  };

  useEffect(() => {
    getCurrentProjects();
  }, []);

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography variant="subtitle2">Projets en cours</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 2 }}
          flexWrap="wrap"
          width={1000}
        >
          {projects.map((project) => (
            <UserProjectCard
              key={project.id}
              projectName={project.project_name}
              projectDescription={project.project_description}
            />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default UserProjectCurrent;
