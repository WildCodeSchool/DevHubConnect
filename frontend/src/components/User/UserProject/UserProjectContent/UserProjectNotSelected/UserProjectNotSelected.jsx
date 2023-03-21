import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Box } from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

function UserProjectNotSelected({ expanded, onClick }) {
  const [projects, setProjects] = useState([]);
  const [candidacies, setCandidacies] = useState([]);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("userId");
  const userId = parseInt(id, 10);

  const getNotSelectedProjects = () => {
    axios
      .get("http://localhost:5007/projects_all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((projectsData) => {
        setProjects(projectsData[0]);
      });
  };

  useEffect(() => {
    const getCandidacy = async () => {
      try {
        const response = await axios.get("http://localhost:5007/candidacies", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const candidaciesFilter = response.data
          .filter(
            (candidacy) =>
              candidacy.user_id === userId && candidacy.user_status === 3
          )
          .map((candidacy) => candidacy);
        setCandidacies([...new Set(candidaciesFilter)]);
      } catch (error) {
        console.error("Failed to fetch candidacies: ", error);
      }
    };
    getCandidacy();
  }, [userId]);

  useEffect(() => {
    getNotSelectedProjects();
  }, []);

  return (
    <Accordion expanded={expanded} onClick={onClick}>
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
            {projects
              .filter((project) =>
                candidacies
                  .map((candidacy) => candidacy.project_id)
                  .includes(project.id)
              )
              .map((project) => (
                <Grid item xs={12} md={6}>
                  <UserProjectCard
                    key={project.id}
                    projectName={project.project_name}
                    projectDescription={project.project_about}
                    sx={{ marginLeft: "20px" }}
                    projectId={project.id}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

UserProjectNotSelected.propTypes = {
  expanded: PropTypes.string,
  onClick: PropTypes.string,
};

UserProjectNotSelected.defaultProps = {
  expanded: "",
  onClick: "",
};

export default UserProjectNotSelected;
