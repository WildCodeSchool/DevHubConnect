/* eslint-disable react/require-default-props */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import PropTypes from "prop-types";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

function UserProjectCurrent({ expanded }) {
  const [projects, setProjects] = useState([]);
  const currentProjectsRef = useRef(null);
  const getCurrentProjects = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5007/projects_current", {
        headers: { Authorization: `Bearer ${token}` },
      })
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
    <Accordion expanded={expanded} ref={currentProjectsRef}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        data-type="current"
      >
        <Typography variant="accordionTitle">Projets en cours</Typography>
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
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

UserProjectCurrent.propTypes = {
  expanded: PropTypes.string,
};

export default UserProjectCurrent;
