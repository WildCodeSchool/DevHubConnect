import React, { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
        setCandidacy(candidaciesData);
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
      justifyContent="flex-start"
      alignItems="flex-start"
      mt="2"
      sx={{ flexWrap: "wrap", gap: 2 }}
    >
      {projects.map((project, index) => {
        return (
          <Card sx={{ maxWidth: 215 }} index={index}>
            <CardMedia
              component="img"
              // alt= {}
              height="150"
              image="https://picsum.photos/300/200"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.projectName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.about}
                description
              </Typography>
              <Typography>
                <a href={`/project/:${project.id}`}>en savoir plus</a>
              </Typography>
            </CardContent>
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
