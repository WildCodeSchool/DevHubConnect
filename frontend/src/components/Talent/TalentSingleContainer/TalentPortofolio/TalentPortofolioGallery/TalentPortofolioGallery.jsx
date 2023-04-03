import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Stack,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Link,
  Paper,
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
          .filter((apply) => apply.user_status === 2)
          .map((apply) => apply);
        setCandidacy(candidaciesFilter);
      });
  };

  useEffect(() => {
    getProjectList();
    getCandidacy();
  }, []);

  const projects = projectList.filter((project) => {
    const candidacyFilter = candidacy.find(
      (apply) => apply.project_id === project.id && apply.user_id === id
    );
    return project.creator_id === id || candidacyFilter !== undefined;
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
          <Card
            sx={{ maxWidth: { xs: "100%", sm: "100%", md: "30%" } }}
            index={index}
            key={project?.id}
          >
            <Link href={`/project/${project.id}`} underline="none">
              <Paper
                elevation={2}
                sx={{
                  color: "UserDashboardCard.color",
                  backgroundColor: "UserProjectCard.Background",
                  "&:hover": {
                    backgroundColor: "UserProjectCard.bghover",
                  },
                  borderLeft: 6,
                  borderColor: "UserProjectCard.Completed",
                }}
              >
                <CardMedia
                  component="img"
                  alt={`image du projet ${project.project_name}`}
                  height="150"
                  image={`../../../../../src/assets/projects-img/${project.project_image}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.project_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.project_about}
                  </Typography>
                </CardContent>
              </Paper>
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
  id: null,
};

export default TalentPortofolioGallery;
