import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Stack,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Link,
  CardActions,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

function TalentPortofolioGallery({ id }) {
  const [projectList, setProjectList] = useState([]);
  const [candidacy, setCandidacy] = useState([]);

  const token = localStorage.getItem("token");

  const getProjectList = () => {
    axios
      .get("http://localhost:5007/projects", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((projectsData) => {
        setProjectList(projectsData);
      });
  };

  const getCandidacy = () => {
    axios
      .get("http://localhost:5007/candidacies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((candidaciesData) => {
        const candidaciesFilter = candidaciesData
          .filter((apply) => apply.user_status !== 3)
          .map((apply) => apply);
        setCandidacy(candidaciesFilter);
      });
  };

  useEffect(() => {
    getProjectList();
    getCandidacy();
  }, []);

  const projects = candidacy
    .filter((apply) => apply.user_id === id)
    .map((List) => {
      const skillItem = projectList.find(
        (project) => project.id === List.project_id
      );
      return skillItem
        ? {
            id: skillItem.id,
            projectName: skillItem.project_name,
            about: skillItem.project_about,
            image: skillItem.project_image,
          }
        : "";
    });

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="flex-start"
      mt="2"
      sx={{ flexWrap: "wrap", gap: 2 }}
    >
      {projects.map((project, index) => {
        return (
          <Card sx={{ maxWidth: "30%" }} index={index}>
            <Link href={`/project/${project.id}`} underline="none">
              <CardMedia
                component="img"
                // alt= {}
                height="150"
                image={`../../../../../src/assets/projects-img/${project.image}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.projectName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.about}
                  description
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={`/project/${project.id}`}
                >
                  Plus
                </Button>
              </CardActions>
            </Link>
          </Card>
        );
      })}
    </Stack>
  );
}

TalentPortofolioGallery.propTypes = {
  id: PropTypes.number,
};

TalentPortofolioGallery.defaultProps = {
  id: "",
};

export default TalentPortofolioGallery;
