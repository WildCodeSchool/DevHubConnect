import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

// Définition du composant fonctionnel UserDashboardProjectSuggest
export default function UserDashboardProjectSuggest() {
  // Utilisation de useState pour créer un state projectListing et de la fonction setProjectListing pour modifier ce state
  const [projectListing, setProjectListing] = useState([]);
  const [projectSkillListing, setProjectSkillListing] = useState([]);
  const [skillListing, setSkillListing] = useState([]);

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

  const getProjectSkill = () => {
    axios
      .get("http://localhost:5006/project_skills", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000", // L'URL de votre front-end
        },
      })
      .then((response) => response.data)
      .then((projectsSkillData) => {
        // Utilisation de setProjectListing pour mettre à jour le state projectListing avec les données de l'API
        setProjectSkillListing(projectsSkillData);
      });
  };

  const getSkill = () => {
    axios
      .get("http://localhost:5006/skills", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000", // L'URL de votre front-end
        },
      })
      .then((response) => response.data)
      .then((skillData) => {
        // Utilisation de setProjectListing pour mettre à jour le state projectListing avec les données de l'API
        setSkillListing(skillData);
      });
  };

  useEffect(() => {
    getProjects();
    getSkill();
    getProjectSkill();
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
          <Link href={`/project/${project.id}`} underline="none">
            <Paper
              key={project.id}
              sx={{ width: "100%" }}
              variant="UserDashboardProjectSuggest.background"
            >
              <Box sx={{ width: 500 }}>
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
                        width: 1,
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
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        width: 460,
                      }}
                    >
                      {project.project_description}
                    </Typography>

                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={1}
                      pt={2}
                    >
                      {projectSkillListing
                        .filter(
                          (projectSkill) =>
                            projectSkill.project_id === project.id
                        )
                        .map((projectSkill) => {
                          const skillFilterd = skillListing.find(
                            (skill) => skill.id === projectSkill.skill_id
                          );
                          return (
                            <Chip
                              key={skillFilterd.id}
                              label={skillFilterd.skill_name}
                              size="small"
                            />
                          );
                        })}
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Paper>
          </Link>
        );
      })}
    </>
  );
}
