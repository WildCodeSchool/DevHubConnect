/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import axios from "axios";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

function UserProjects() {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => response.data)
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        p={1}
        flexWrap="wrap"
      >
        {projects.map((project) => {
          return (
            <UserProjectCard
              key={project.id}
              project_image={project.project_image}
              project_name={project.project_name}
              project_description={project.project_description}
            />
          );
        })}
      </Stack>
    </div>
  );
}

function UserProjectCurrent() {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle2">Projets en cours </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          p={1}
        >
          <UserProjects />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default UserProjectCurrent;
