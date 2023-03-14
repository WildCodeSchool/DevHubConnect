// External dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Material-UI components
import {
  Avatar,
  Stack,
  Paper,
  Chip,
  Typography,
  Link,
  Box,
} from "@mui/material";

// Définition du composant fonctionnel UserDashboardProjectSuggest
export default function UserDashboardProjectSuggest() {
  // Utilisation de useState pour créer un state projectListing et de la fonction setProjectListing pour modifier ce state
  const [projectListing, setProjectListing] = useState([]);
  const [projectSkillListing, setProjectSkillListing] = useState([]);
  const [skillListing, setSkillListing] = useState([]);
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    // const userId = parseInt(localStorage.getItem("userId"), 10);

    if (!token) {
      navigate("/login");
    } else {
      // Définition de la fonction getProjects pour récupérer les projets à partir de l'API REST
      const getProjects = () => {
        axios
          .get("http://localhost:5007/projects", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => response.data)
          .then((projectsData) => {
            // Utilisation de setProjectListing pour mettre à jour le state projectListing avec les données de l'API
            setProjectListing(projectsData);
          });
      };

      const getProjectSkill = () => {
        axios
          .get("http://localhost:5007/project_skills", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => response.data)
          .then((projectsSkillData) => {
            // Utilisation de setProjectListing pour mettre à jour le state projectListing avec les données de l'API
            setProjectSkillListing(projectsSkillData);
          });
      };

      const getSkill = () => {
        axios
          .get("http://localhost:5007/skills", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => response.data)
          .then((skillData) => {
            // Utilisation de setProjectListing pour mettre à jour le state projectListing avec les données de l'API
            setSkillListing(skillData);
          });
      };

      const getUser = () => {
        axios
          .get("http://localhost:5007/users", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => response.data)
          .then((userData) => {
            // Utilisation de setProjectListing pour mettre à jour le state projectListing avec les données de l'API
            setUser(userData);
            console.info(userData);
          });
      };

      getProjects();
      getSkill();
      getProjectSkill();
      getUser();
    }
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <>
      {projectListing.slice(-4).map((project) => {
        console.info("project", project);

        return (
          <Box sx={{ width: "100%" }}>
            <Paper
              key={project.id}
              variant="UserDashboardProjectSuggest.background"
              sx={{
                width: 1,
                color: "UserDashboardProjectSuggest.color",
                backgroundColor: "UserDashboardProjectSuggest.Background",
                "&:hover": {
                  backgroundColor: "UserDashboardProjectSuggest.bghover",
                },
              }}
            >
              <Link href={`/project/${project.id}`} underline="none">
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
                    <Box sx={{ width: "100%" }}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        spacing={1}
                      >
                        <Stack direction={{ sm: "column", md: "column" }} p={0}>
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
                          alt={user.firstname}
                          src={`../../../../../src/assets/projects-img/${project.project_image}`}
                          sx={{ width: 50, height: 50 }}
                        />
                      </Stack>
                    </Box>
                    <Box sx={{ width: 1 }}>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                          color: "UserDashboardProjectSuggest.color",
                          width: "100%",
                        }}
                      >
                        {project.project_about}
                      </Typography>
                    </Box>

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
              </Link>
            </Paper>
          </Box>
        );
      })}
    </>
  );
}
