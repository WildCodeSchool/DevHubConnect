import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import axios from "axios";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

function UserProjectAll() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5007/project", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((projectsData) => {
        setProjects(projectsData[0]);
        console.info(projectsData[0], "allprojects");
      });
  };

  useEffect(() => {
    getAllProjects();
  }, []);
  return (
    <Accordion id="all">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography variant="subtitle2">Tous les projets</Typography>
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
export default UserProjectAll;
