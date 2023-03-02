import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

// Définition du composant fonctionnel UserDashboardProjectSuggest
export default function UserDashboardProjectSuggest() {
  // Utilisation de useState pour créer un state projectListing et de la fonction setProjectListing pour modifier ce state
  const [projectListing, setProjectListing] = useState([]);

  // Définition de la fonction getProjects pour récupérer les projets à partir de l'API REST
  const getProjects = () => {
    axios
      .get("http://localhost:5006/projects", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000", // L'URL de votre front-end
        },
      })
      .then((response) => response.data)
      .then((projectsData) => {
        // Utilisation de setProjectListing pour mettre à jour le state projectListing avec les données de l'API
        setProjectListing(projectsData);
      });
  };

  // Utilisation de useEffect pour exécuter la fonction getProjects lors du premier rendu du composant
  useEffect(() => {
    getProjects();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  // Retour du JSX à partir de la fonction UserDashboardProjectSuggest

  return (
    <>
      {projectListing.slice(-5).map((project) => {
        return (
          <Paper
            key={project.id}
            sx={{ width: 1 }}
            variant="UserDashboardProjectSuggest.background"
          >
            <Stack
              direction={{ sm: "column", md: "row" }}
              spacing={{ sm: 1, md: 2 }}
              justifyContent="space-between"
              alignItems="center"
              p={2}
              sx={{
                borderLeft: 4,
                borderColor: "UserDashboardProjectSuggest.border",
              }}
            >
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0.5}
              >
                <Stack
                  direction={{ sm: "column", md: "row" }}
                  spacing={{ sm: 1, md: 2 }}
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    width: "100%",
                  }}
                >
                  <Stack
                    direction={{ sm: "column", md: "column", width: 1 }}
                    p={0}
                  >
                    <Typography component="div" variant="h2">
                      {project.project_name}
                    </Typography>
                    <Typography
                      component="div"
                      variant="UserDaskboardSuggestDate"
                    >
                      Du {formatDate(project.project_start_date)} au{" "}
                      {formatDate(project.project_end_date)}
                    </Typography>
                  </Stack>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                  />
                </Stack>
                <Typography variant="body1" gutterBottom>
                  {project.project_description}
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={1}
                  pt={2}
                >
                  <Chip label="Javascript" size="small" />
                  <Chip label="Node.js" size="small" />
                  <Chip label="React" size="small" />
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        );
      })}
    </>
  );
}
