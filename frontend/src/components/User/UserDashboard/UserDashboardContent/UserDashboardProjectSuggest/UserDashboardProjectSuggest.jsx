import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

export default function UserDashboardProjectSuggest() {
  // Utilisation de useState pour créer un state projectListing et de la fonction setProjectListing pour modifier ce state
  const [projectListing, setProjectListing] = useState([]);
  const [projectSkillListing, setProjectSkillListing] = useState([]);
  const [skillListing, setSkillListing] = useState([]);
  const [user, setUser] = useState([]);

  // Définition de la fonction getProjects pour récupérer les projets à partir de l'API RESTp
  const getProjects = () => {
    axios
      .get("http://localhost:5007/projects", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000", // L'URL de votre front-end
        },
      })
      .then((response) => response.data)
      .then((projectsData) => {
        // Utilisation de setProjectListing pour mettre à jour le state projectListing avec les données de l'API
        setProjectListing(projectsData);
        // console.info("projectsData : ", projectsData);
      });
  };

  const getProjectSkill = () => {
    axios
      .get("http://localhost:5007/project_skills", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000", // L'URL de votre front-end
        },
      })
      .then((response) => response.data)
      .then((projectsSkillData) => {
        // Utilisation de setProjectListing pour mettre à jour le state projectListing avec les données de l'API
        setProjectSkillListing(projectsSkillData);
        // console.log("projectsSkillData : ", projectsSkillData);
      });
  };

  const getSkill = () => {
    axios
      .get("http://localhost:5007/skills", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000", // L'URL de votre front-end
        },
      })
      .then((response) => response.data)
      .then((skillData) => {
        // console.log("skillData : ", skillData); => OK
        // Utilisation de setProjectListing pour mettre à jour le state projectListing avec les données de l'API
        setSkillListing(skillData);
      });
  };

  const getUser = (includeImage = false) => {
    axios
      .get("http://localhost:5007/users", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        params: {
          includeImage, // ajouter cette ligne
        },
      })
      .then((response) => response.data)
      .then((userData) => {
        setUser(userData);
        // console.info("userData : ", userData);
      });
  };

  useEffect(() => {
    getProjects();
    getSkill();
    getProjectSkill();
    getUser();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  // Retour du JSX à partir de la fonction UserDashboardProjectSuggest

  return (
    <>
      {projectListing.slice(-5).map((projectItem) => {
        return (
          <Box sx={{ width: "100%" }}>
            <Paper
              key={projectItem.id}
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
              <Link href={`/project/${projectItem.id}`} underline="none">
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
                        spacing={{ sm: 1, md: 2 }}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                      >
                        <Stack direction={{ sm: "column", md: "column" }} p={0}>
                          <Typography component="div" variant="h2">
                            {projectItem.project_name}
                          </Typography>
                          <Typography
                            component="div"
                            variant="UserDaskboardSuggestDate"
                          >
                            Du {formatDate(projectItem.project_start_date)} au{" "}
                            {formatDate(projectItem.project_end_date)}
                          </Typography>
                        </Stack>

                        {console.info(
                          "filtered projects:",
                          projectListing.filter(
                            (project) => project.creator_id === user.id
                          )
                        )}

                        {console.info("projectListing", projectListing)}
                        {console.info("user", user)}
                        {user &&
                          projectListing
                            .filter((project) => {
                              console.info(
                                "project creator id: ",
                                project.creator_id
                              );
                              console.info("user id: ", user.id);
                              return project.creator_id === user.id;
                            })
                            .map((projectCreator) => {
                              const creator = user.find(
                                (u) => u.id === projectCreator.creator_id
                              );
                              console.info("creator found: ", creator);
                              return (
                                <Avatar
                                  key={projectCreator.id}
                                  src={
                                    creator && creator.user_image
                                      ? creator.user_image
                                      : "https://randomuser.me/api/portraits/women/28.jpg"
                                  }
                                />
                              );
                            })}
                      </Stack>
                    </Box>
                    <Box sx={{ width: 1 }}>
                      <Typography variant="body1" gutterBottom>
                        {projectItem.project_description}
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
                            projectSkill.project_id === projectItem.id
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
