import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import axios from "axios";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

function UserProjectUpComing() {
  const [projects, setProjects] = useState([]);

  const getUpgoingProjects = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5007/projects_upgoing", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((projectsData) => {
        setProjects(projectsData[0]);
        console.info(projectsData[0]);
      });
  };

  useEffect(() => {
    getUpgoingProjects();
  }, []);

  return (
    <Accordion id="UpComing">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography variant="subtitle2">Projets à venir </Typography>
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

export default UserProjectUpComing;
